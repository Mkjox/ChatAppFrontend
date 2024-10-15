import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ChatRoom {
    id: string;
    name: string;
    lastMessage: string;
}

const chatRooms: ChatRoom[] = [
    { id: '1', name: 'General', lastMessage: 'Hello there!' },
    { id: '2', name: 'Friends', lastMessage: 'Catch you later!' },
    { id: '3', name: 'Work', lastMessage: 'Deadline tomorrow' },
];

const HomeScreen: React.FC = () => {
    const navigation = useNavigation();

    const handleChatRoomPress = (roomId: string) => {
        navigation.navigate('ChatScreen', { roomId });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Welcome to ChatApp</Text>
            <FlatList
                data={chatRooms}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.chatRoomContainer}
                        onPress={() => handleChatRoomPress(item.id)}>
                        <Text style={styles.chatRoomName}>{item.name}</Text>
                        <Text style={styles.chatRoomMessage}>{item.lastMessage}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    chatRoomContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#f9f9f9',
        marginBottom: 10,
        borderRadius: 10
    },
    chatRoomName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    chatRoomMessage: {
        fontSize: 14,
        color: '#666',
    },
});

export default HomeScreen;
