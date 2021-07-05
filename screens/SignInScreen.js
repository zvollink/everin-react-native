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

const backText = '< Back';

const SignInScreen = ({navigation}) => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const ref_passwordInput = useRef();

    function signInOnSubmit(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            navigation.navigate('HomeScreen', { username: user.displayName });
        })
        .catch((error) => {
            console.log('Error signing up: ', error.message);
        });
    }

    return(
        <View style={styles.container}>
          <TouchableOpacity
              style={ styles.backButton }
              onPress={ () => navigation.navigate('SplashScreen') }>
              <Text style={styles.backText}>{backText}</Text>
          </TouchableOpacity>
          <Text style={ styles.header }>Login</Text>
          <View style={ styles.signInForm }>
            <TextInput style={ styles.input } placeholder="Email"
                name="email"
                autoFocus={ true }
                onChangeText={(userEmail) => setUserEmail(userEmail)}
                returnKeyType="next"
                onSubmitEditing={() => ref_passwordInput.current.focus()}
                blurOnSubmit={false} />
            <TextInput style={ styles.input } placeholder="Password"
                name="password"
                onChangeText={(userPassword) => setUserPassword(userPassword)}
                ref={ref_passwordInput} />
          </View>
          <TouchableOpacity
            style={ [styles.button, styles.signInButton] }
            onPress={ () => signInOnSubmit(userEmail, userPassword) }>
                <Text style={ styles.signInText }>Sign In</Text>
          </TouchableOpacity>
        </View>
    );
};

export default SignInScreen;

const {height} = Dimensions.get('screen');
const topSpacing = height * .15;
const formHeight = height * .17;

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
    signInForm: {
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
    signInButton: {
        backgroundColor: '#2bc3ff',
    },
    signInText: {
        color: 'white',
        fontWeight: 'bold'
    }
});