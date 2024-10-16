/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}
