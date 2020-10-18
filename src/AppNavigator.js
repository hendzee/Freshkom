import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import {
    SplashScreen,
    HomeScreen,
} from './screens';
import {
    CartNavigationIcon,
    DiscoverNavigationIcon,
    HomeNavigationIcon,
    OrderNavigationIcon,
    AccountNavigationIcon
} from './components/global';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

/** Bottom tab navigation components */
const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}
        appearance='noIndicator'
        style={navStyle.bottomNavigation}
    >
        <BottomNavigationTab icon={() => <CartNavigationIcon isActive={state.index === 0} />} />
        <BottomNavigationTab icon={() => <DiscoverNavigationIcon isActive={state.index === 1} />} />
        <BottomNavigationTab icon={() => <HomeNavigationIcon isActive={state.index === 2} />} />
        <BottomNavigationTab icon={() => <OrderNavigationIcon isActive={state.index === 3} />} />
        <BottomNavigationTab icon={() => <AccountNavigationIcon isActive={state.index === 4} />} />
    </BottomNavigation>
);

/** Bottom Navigator */
const BottomTabNavigator = () => (
    <Bottom.Navigator
        tabBar={props => <BottomTabBar {...props} />}
        initialRouteName='HOME'
    >
        <Bottom.Screen name='CART' component={HomeScreen} />
        <Bottom.Screen name='DISCOVER' component={HomeScreen} />
        <Bottom.Screen name='HOME' component={HomeScreen} />
        <Bottom.Screen name='ORDER' component={HomeScreen} />
        <Bottom.Screen name='ACCOUNT' component={HomeScreen} />
    </Bottom.Navigator>
);

/** Stack Navigator */
const AppStackNavigatior = () => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='MAIN' component={BottomTabNavigator} />
        <Stack.Screen name='SPLASH' component={SplashScreen} />
    </Stack.Navigator>
);

const AppNavigator = () => (
    <NavigationContainer>
        <AppStackNavigatior />
    </NavigationContainer>
);

/** Style for navigation components */
const navStyle = StyleSheet.create({
    bottomNavigation: {
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderColor: '#E1ECF3'
    }
});

export default AppNavigator;