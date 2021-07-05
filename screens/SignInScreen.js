import React from 'react';
import { View,
    Text,
    Button,
    StyleSheet,
    TextInput
 } from 'react-native';

const SignInScreen = () => {
    return(
        <View style={styles.container}>
          <Text>SignInScreen</Text>
          <TextInput style={ styles.input } placeholder="Username or email" />
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: 334,
        height: 50,
        borderWidth: 1,
        //borderColor: 'lightgray'
    }
});