import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
