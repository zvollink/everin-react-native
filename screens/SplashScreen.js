import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ImageBackground,
    TouchableOpacity
 } from 'react-native';

const SplashScreen = ({navigation}) => {
    return(
        <View style={ styles.container }>
            <ImageBackground source={ require('../assets/splash-screen-01.png') }
                style={ styles.backgroundImage }>
                <View style={ styles.signInLoginForm }>
                <TouchableOpacity
                    style={ [styles.button, styles.signupButton] }
                    onPress={ () => navigation.navigate('SignUpScreen') }>
                        <Text style={ styles.signupText }>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.button }
                    onPress={ () => navigation.navigate('SignInScreen') }>
                        <Text style={ styles.loginText }>Login</Text>
                </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const bottomSpacing = height * .10;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    signInLoginForm: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: bottomSpacing
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
        backgroundColor: '#2bc3ff'
    },
    signupText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    loginText: {
        color: '#2bc3ff',
        fontSize: 16,
        fontWeight: 'bold'
    },
});