import React, { useRef, useState } from 'react'
import { View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableOpacity
 } from 'react-native'

 import firebase from 'firebase/app'
 import 'firebase/auth';
 import 'firebase/firestore';

const backText = '< Back';

const SignUpScreen = ({navigation}) => {

    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [errorText, setErrorText] = useState('');

    const ref_lastNameInput = useRef();
    const ref_emailInput = useRef();
    const ref_passwordInput = useRef();

    function signUpOnSubmit(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;

            // Save first name as display name for now.
            user.updateProfile({
                displayName: userFirstName
              }).catch((error) => {
                  console.log('Error saving user\'s displayName: ', error);
              });

            // Save first and last name to the Firestore.
            var db = firebase.firestore();
            db.collection('users').doc(user.id).set({
                firstName: userFirstName,
                lastName: userLastName
            });
            navigation.navigate('HomeScreen', { username: userFirstName });
        })
        .catch((error) => {
            console.log('Error signing up: ', error.message);
            setErrorText(error.message);
        });
    }

    return(
        <View style={styles.container}>
          <TouchableOpacity
              style={ styles.backButton }
              onPress={ () => navigation.navigate('SplashScreen') }>
              <Text style={styles.backText}>{backText}</Text>
          </TouchableOpacity>
          <Text style={ styles.header }>Sign up!</Text>
          <View>
              <Text style={ styles.errorText }>{ errorText }</Text>
          </View>
          <View style={ styles.signUpForm }>
            <TextInput style={ styles.input } placeholder="First name"
                name="firstname"
                onChangeText={(userFirstName) => setUserFirstName(userFirstName)}
                autoFocus={ true }
                returnKeyType="next"
                onSubmitEditing={() => ref_lastNameInput.current.focus()}
                blurOnSubmit={false} />
            <TextInput style={ styles.input } placeholder="Last name"
                name="lastname"
                onChangeText={(userLastName) => setUserLastName(userLastName)}
                returnKeyType="next"
                onSubmitEditing={() => ref_emailInput.current.focus()}
                ref={ref_lastNameInput}
                blurOnSubmit={false} />
            <TextInput style={ styles.input } placeholder="Email"
                name="email"
                onChangeText={(userEmail) => setUserEmail(userEmail)}
                returnKeyType="next"
                onSubmitEditing={() => ref_passwordInput.current.focus()}
                ref={ref_emailInput}
                blurOnSubmit={false} />
            <TextInput style={ styles.input } placeholder="Password"
                name="password"
                onChangeText={(userPassword) => setUserPassword(userPassword)}
                ref={ref_passwordInput}
                secureTextEntry />
          </View>
          <TouchableOpacity
            style={ [styles.button, styles.signupButton] }
            onPress={ () => signUpOnSubmit(userEmail, userPassword) }>
                <Text style={ styles.signupText }>Sign Up</Text>
          </TouchableOpacity>
        </View>
    );
};

export default SignUpScreen;

const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');
const topSpacing = height * .15;
const formHeight = height * .33;
const errorWidth = width * .7;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        paddingTop: topSpacing,
        paddingBottom: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },
    input: {
        width: 334,
        height: 50,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 6,
        padding: 10
    },
    backButton: {
        position: 'absolute',
        top: topSpacing - 50,
        left: 30
    },
    backText: {
        color: '#2bc3ff',
        fontSize: 16
    },
    signUpForm: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: formHeight
    },
    button: {
        borderColor: '#2bc3ff',
        borderWidth: 2,
        padding: 10,
        margin: 10,
        width: 334,
        height: 50,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupButton: {
        backgroundColor: '#2bc3ff',
    },
    signupText: {
        color: 'white',
        fontWeight: 'bold'
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        flexWrap: 'wrap',
        width: errorWidth
    }
});