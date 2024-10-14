import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthNavigator from "./AuthNavigator";

const Stack = createStackNavigator();

export default function AppNavigator({ isAuthenticated }) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {isAuthenticated ? (
                    <Stack.Screen name="MainApp" component={BottomTabNavigator} options={{ headerShown: false }} />
                ) : (
                    <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
