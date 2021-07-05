import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import RootStackScreen from './screens/RootStackScreen';


import firebase from 'firebase/app'
import 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBLzMTMZlF9pgdL_pdXdJFCEcLjXjmuBWM',
  authDomain: 'everin-b966a.firebaseapp.com',
  databaseURL: 'https://everin-b966a.firebaseio.com',
  projectId: 'everin-b966a'
};

// Avoid initializing app more than once, other it will error.
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// Listen for authentication state to change.
firebase.auth().onAuthStateChanged(user => {
  if (user != null) {
    console.log('We are authenticated now!');
  }

  // Do other things
});

export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen/>
    </NavigationContainer>
  );
}