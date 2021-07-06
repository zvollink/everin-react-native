import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import RootStackScreen from './screens/RootStackScreen';
import HomeStackScreen from './screens/HomeStackScreen';


import firebase from 'firebase/app'
import 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBLzMTMZlF9pgdL_pdXdJFCEcLjXjmuBWM',
  authDomain: 'everin-b966a.firebaseapp.com',
  databaseURL: 'https://everin-b966a.firebaseio.com',
  projectId: 'everin-b966a'
};

// Avoid initializing app more than once, otherwise it will error.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Listen for authentication state to change.
// TODO(zach): Not sure we need this. Remove?
firebase.auth().onAuthStateChanged(user => {
  if (user != null) {
    console.log('We are authenticated now!');
  }

  // Do other things
});


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    setTimeout(async() => {
      var user = await firebase.auth().currentUser;

      if (user) {
        setUsername(user.displayName);

        var token = null;
        token = await user.getIdToken();
        setUserToken(token);
      }

      setIsLoading(false);
    }, 400);
  }, []);

  if (userToken) {
    return(
      <NavigationContainer>
        <HomeStackScreen displayName={username}/>
      </NavigationContainer>
    );
  }
  if (isLoading) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <RootStackScreen/>
    </NavigationContainer>
  );
}