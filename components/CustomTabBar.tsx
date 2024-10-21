/* eslint-disable react-native/no-inline-styles */
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { darkTheme, lightTheme } from '../assets/colors/theme';


const CustomTabBar = ({ state, descriptors, navigation }) => {
    const { isDark } = useTheme();

    const themeStyles = isDark ? darkTheme : lightTheme;

    return (
        <View style={[{ flexDirection: 'row', height: 80, backgroundColor: '#FFFFFF' }, themeStyles.container]}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                let iconName;

                if (route.name === 'Home') {
                    iconName = isFocused ? 'home' : 'home-outline';
                }

                else if (route.name === 'Profile') {
                    iconName = isFocused ? 'person' : 'person-outline';
                }

                else if (route.name === 'Settings') {
                    iconName = isFocused ? 'settings' : 'settings-outline';
                }

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestId}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <View style={{
                            position: 'absolute',
                            padding: 10,
                            backgroundColor:
                                isFocused ? '#5E60CE' : 'transparent',
                            borderRadius: 20,
                            width: 90,
                            flexDirection: 'row',
                        }}>
                            <Ionicons name={iconName} size={24} color={isFocused ? 'white' : 'gray'} />
                            <Text style={{ color: isFocused ? 'white' : 'gray', fontSize: 12, marginTop: 3, marginLeft: 5 }}>
                                {label}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );

            })}

        </View>
    );
};
export default CustomTabBar;
