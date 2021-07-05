import React, { useRef } from 'react'
import { View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableOpacity
 } from 'react-native'

const backText = '< Back';

const SignUpScreen = ({navigation}) => {

    const ref_lastNameInput = useRef();
    const ref_emailInput = useRef();
    const ref_passwordInput = useRef();

    return(
        <View style={styles.container}>
          <TouchableOpacity
              style={ styles.backButton }
              onPress={ () => navigation.navigate('SplashScreen') }>
              <Text style={styles.backText}>{backText}</Text>
          </TouchableOpacity>
          <Text style={ styles.header }>Sign up!</Text>
          <View style={ styles.signUpForm }>
            <TextInput style={ styles.input } placeholder="First name"
                autoFocus={ true }
                returnKeyType="next"
                onSubmitEditing={() => ref_lastNameInput.current.focus()}
                blurOnSubmit={false} />
            <TextInput style={ styles.input } placeholder="Last name"
                returnKeyType="next"
                onSubmitEditing={() => ref_emailInput.current.focus()}
                ref={ref_lastNameInput}
                blurOnSubmit={false} />
            <TextInput style={ styles.input } placeholder="Email"
                returnKeyType="next"
                onSubmitEditing={() => ref_passwordInput.current.focus()}
                ref={ref_emailInput}
                blurOnSubmit={false} />
            <TextInput style={ styles.input } placeholder="Password"
                ref={ref_passwordInput} />
          </View>
          <TouchableOpacity
            style={ [styles.button, styles.signupButton] }
            onPress={ () => alert('Signing up!') }>
                <Text style={ styles.signupText }>Sign Up</Text>
          </TouchableOpacity>
        </View>
    );
};

export default SignUpScreen;

const {height} = Dimensions.get('screen');
const topSpacing = height * .15;
const formHeight = height * .33;

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
    }
});