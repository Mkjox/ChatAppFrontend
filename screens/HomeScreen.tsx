import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../context/ThemeContext';
import { darkTheme, lightTheme } from '../assets/colors/theme';

interface ChatRoom {
    id: number;
    name: string;
    lastMessage: string;
}

const chatRooms: ChatRoom[] = [
    { id: 1, name: 'General', lastMessage: 'Hello there!' },
    { id: 2, name: 'Friends', lastMessage: 'Catch you later!' },
    { id: 3, name: 'Work', lastMessage: 'Deadline tomorrow' },
];

const HomeScreen: React.FC = () => {
    const navigation = useNavigation();
    const { isDark } = useTheme();

    const themeStyles = isDark ? darkTheme : lightTheme;

    const handleChatRoomPress = (roomId: number) => {
        navigation.navigate('Chat', { roomId: item.id });
    };

    const renderChatItem = ({ item }) => (
        <TouchableOpacity style={[styles.chatItem, themeStyles.card]} onPress={handleChatRoomPress}>
            <View style={styles.chatDetails}>
                <Text style={[styles.chatName, themeStyles.text]}>{item.name}</Text>
                <Text style={[styles.chatLastMessage, themeStyles.text]}>{item.lastMessage}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>
    );

    return (
        <View style={[styles.container, themeStyles.container]}>
            <View style={styles.welcomeSection}>
                <Text style={[styles.welcomeText, themeStyles.text]}>Welcome, User!</Text>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1726853546098-380e29da9e31' }} style={styles.profileImage} />
            </View>

            <View style={styles.recentChatsHeader}>
                <Text style={[styles.sectionTitle, themeStyles.text]}>
                    Recent Chats
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('ChatListScreen')}>
                    <Text>See All</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={chatRooms}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderChatItem}
                style={styles.chatList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 20,
    },
    welcomeSection: {
        alignItems: 'center',
        marginVertical: 20,
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginTop: 10,
    },
    recentChatsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    seeAllText: {
        color: '#007BFF',
    },
    chatList: {
        marginBottom: 20,
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    chatImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    chatDetails: {
        flex: 1,
    },
    chatName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    chatLastMessage: {
        fontSize: 14,
        color: '#999',
        marginTop: 3,
    },
});

export default HomeScreen;
