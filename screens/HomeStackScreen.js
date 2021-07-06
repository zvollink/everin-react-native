import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({displayName, navigation}) => (
    <HomeStack.Navigator headerMode='none'>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen}
            initialParams={{ username: displayName }}/>
        <HomeStack.Screen name="SplashScreen" component={SplashScreen}/>
        <HomeStack.Screen name="SignInScreen" component={SignInScreen}/>
        <HomeStack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </HomeStack.Navigator>
);

export default HomeStackScreen;