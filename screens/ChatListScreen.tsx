import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchMessages } from '../services/api';

const ChatListScreen = ({ navigation }: { navigation: any }) => {
    const [chats, setChats] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadChats = async () => {
            try {
                const messages = await fetchMessages();
                setChats(messages);
            }
            catch (error) {
                console.error('Failed to load chats', error);
            }
            finally {
                setLoading(false);
            }
        };

        loadChats();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={chats}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Chat', { chatId: item.id })}>
                        <Text style={styles.chatItem}>{item.content}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chatItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default ChatListScreen;
