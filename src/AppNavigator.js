import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    SplashScreen
} from './screens';

const Stack = createStackNavigator();

const AppStackNavigatior = () => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='SPLASH' component={SplashScreen} />
    </Stack.Navigator>
)

const AppNavigator = () => (
    <NavigationContainer>
        <AppStackNavigatior />
    </NavigationContainer>
);

export default AppNavigator;