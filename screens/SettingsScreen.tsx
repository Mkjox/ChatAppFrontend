import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Switch, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { darkTheme, lightTheme } from '../assets/colors/theme';
import { useTheme } from '../context/ThemeContext';

const SettingsScreen = () => {
    const { isDark, toggleTheme } = useTheme();

    const themeStyles = isDark ? darkTheme : lightTheme;

    return (
        <ScrollView style={[styles.container, themeStyles.container]}>
            {/* Header
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="arrow-back" size={28} color="#fff" />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, themeStyles.text]}>Settings</Text>
            </View> */}

            {/* Profile Card */}
            <View style={[styles.profileCard, themeStyles.card]}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4' }} // Replace with profile picture
                    style={styles.profilePic}
                />
                <View style={styles.profileInfo}>
                    <Text style={[styles.username, themeStyles.text]}>John Doe</Text>
                    <Text style={[styles.email, themeStyles.text]}>john.doe@example.com</Text>
                    <TouchableOpacity style={styles.editProfileButton}>
                        <Text style={styles.editProfileText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Settings Options */}
            <View style={[styles.settingsContainer, themeStyles.card]}>
                {/* Account Section */}
                <TouchableOpacity style={styles.settingsItem}>
                    <Ionicons name="person-outline" size={24} color={themeStyles.icon.color} />
                    <Text style={[styles.settingsText, themeStyles.text]}>Account</Text>
                </TouchableOpacity>

                {/* Privacy */}
                <TouchableOpacity style={styles.settingsItem}>
                    <Feather name="lock" size={24} color={themeStyles.icon.color} />
                    <Text style={[styles.settingsText, themeStyles.text]}>Privacy</Text>
                </TouchableOpacity>

                {/* Dark Mode */}
                <View style={styles.settingsItem}>
                    <MaterialCommunityIcons name="theme-light-dark" size={24} color={themeStyles.icon.color} />
                    <Text style={[styles.settingsText, themeStyles.text]}>Dark Mode</Text>
                    <Switch
                        value={isDark}
                        onValueChange={toggleTheme}
                        style={styles.switch}
                    />
                </View>

                {/* Notifications */}
                <TouchableOpacity style={styles.settingsItem}>
                    <Ionicons name="notifications-outline" size={24} color={themeStyles.icon.color} />
                    <Text style={[styles.settingsText, themeStyles.text]}>Notifications</Text>
                </TouchableOpacity>
            </View>

            {/* Logout */}
            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6FA',
    },
    header: {
        backgroundColor: '#5E60CE',
        paddingVertical: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 15,
    },
    profileCard: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 20,
        marginTop: 15,
        borderRadius: 12,
        marginHorizontal: 15,
        elevation: 2,
    },
    profilePic: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    profileInfo: {
        marginLeft: 15,
        justifyContent: 'center',
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    email: {
        fontSize: 14,
        color: '#888',
    },
    editProfileButton: {
        backgroundColor: '#5E60CE',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginTop: 10,
    },
    editProfileText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
    settingsContainer: {
        marginTop: 20,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 12,
        marginHorizontal: 15,
        elevation: 2,
    },
    settingsItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    settingsText: {
        fontSize: 16,
        color: '#333',
    },
    switch: {
        transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
    },
    logoutButton: {
        marginTop: 40,
        backgroundColor: '#5E60CE',
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 12,
        alignItems: 'center',
    },
    logoutText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SettingsScreen;
