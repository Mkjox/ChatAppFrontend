import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../context/ThemeContext';
import { darkTheme, lightTheme } from '../assets/colors/theme';

const ProfileScreen = () => {
    const { isDark } = useTheme();

    const themeStyles = isDark ? darkTheme : lightTheme;

    return (
        <ScrollView style={[styles.container, themeStyles.container]}>
            <View style={[styles.header, themeStyles.button]}>
                <TouchableOpacity style={styles.settingsIcon}>
                    <Ionicons name="settings-outline" size={24} color="#fff" />
                </TouchableOpacity>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4' }} // Placeholder for profile picture URL
                    style={styles.profilePic}
                />
                <Text style={styles.username}>John Doe</Text>
                <Text style={styles.profession}>Product Designer</Text>
            </View>

            <View style={[styles.statsContainer, themeStyles.card]}>
                <View style={[styles.statBox]}>
                    <Text style={styles.statNumber}>25</Text>
                    <Text style={[styles.statLabel, themeStyles.text]}>Posts</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>1.2k</Text>
                    <Text style={[styles.statLabel, themeStyles.text]}>Followers</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>350</Text>
                    <Text style={[styles.statLabel, themeStyles.text]}>Following</Text>
                </View>
            </View>

            <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.button}>
                    <Text style={[styles.buttonText, themeStyles.button]}>Follow</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Message</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.aboutSection, themeStyles.card]}>
                <Text style={[styles.sectionTitle, themeStyles.text]}>About Me</Text>
                <Text style={[styles.aboutText, themeStyles.text]}>
                    Passionate product designer and illustrator with a knack for creative problem-solving.
                    Always looking for new ideas and collaborations.
                </Text>
            </View>

            <View style={[styles.contactSection, themeStyles.card]}>
                <Text style={[styles.sectionTitle, themeStyles.text]}>Contact Info</Text>
                <View style={styles.infoContainer}>
                    <Ionicons name="mail-outline" size={20} color="#5E60CE" />
                    <Text style={[styles.infoText, themeStyles.text]}>john.doe@example.com</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Ionicons name="call-outline" size={20} color="#5E60CE" />
                    <Text style={[styles.infoText, themeStyles.text]}>+1 234 567 890</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Ionicons name="location-outline" size={20} color="#5E60CE" />
                    <Text style={[styles.infoText, themeStyles.text]}>Los Angeles, CA</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F1F6',
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#5E60CE',
        paddingBottom: 30,
        paddingTop: 60,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        position: 'relative',
    },
    settingsIcon: {
        position: 'absolute',
        top: 40,
        right: 20,
    },
    profilePic: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 5,
        borderColor: '#fff',
        marginBottom: 10,
    },
    username: {
        fontSize: 28,
        fontWeight: '700',
        color: '#fff',
    },
    profession: {
        fontSize: 16,
        color: '#dcdce6',
        marginTop: 5,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        marginTop: -20,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    statBox: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 22,
        fontWeight: '700',
        color: '#5E60CE',
    },
    statLabel: {
        fontSize: 14,
        color: '#6C757D',
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    button: {
        backgroundColor: '#5E60CE',
        width: width * 0.4,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#5E60CE',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 5,
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    aboutSection: {
        backgroundColor: '#fff',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#495057',
        marginBottom: 10,
    },
    aboutText: {
        fontSize: 14,
        color: '#6C757D',
        lineHeight: 20,
    },
    contactSection: {
        backgroundColor: '#fff',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        marginBottom: 20,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    infoText: {
        fontSize: 16,
        marginLeft: 10,
        color: '#495057',
    },
});

export default ProfileScreen;
