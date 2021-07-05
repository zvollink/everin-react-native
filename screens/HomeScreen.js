import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions
 } from 'react-native';

 import firebase from 'firebase/app'
 import 'firebase/auth';

const HomeScreen = ({route, navigation}) => {
    const { username, otherParams } = route.params;

    function logout() {
        firebase.auth().signOut().then(() => {
            navigation.navigate('SplashScreen');
          }).catch((error) => {
            console.log('Error signing out: ', error);
          });
    }

    return(
        <View style={styles.container}>
          <Text style={ styles.welcomeText }>Welcome to EverIn, { username }!</Text>
          <TouchableOpacity
            style={ styles.button }
            onPress={ () => logout() }>
              <Text style={ styles.logoutButton }>Logout</Text>
          </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;

const {height} = Dimensions.get('screen');
const topSpacing = height * .07;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        position: 'absolute',
        top: topSpacing,
        right: 30
    },
    logoutButton: {
        color: 'red',
        fontSize: 16
    },
    welcomeText: {
        fontSize: 22
    }
});