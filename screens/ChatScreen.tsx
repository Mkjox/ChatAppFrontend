/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, FlatList, TextInput, Button } from 'react-native';
import Chat from '../components/Chat';
import { initiateSocketConnection, disconnectSocket, subscribeToChat } from '../utils/socket';
import { fetchMessages, sendMessage } from '../services/api';

const ChatScreen = () => {
    const [chats, setChats] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchChatMessages = async () => {
            try {
                const messages = await fetchMessages();
                setChats(messages);
            }
            catch (error) {
                console.error('Error fetching chats:', error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchChatMessages();
        initiateSocketConnection();

        return () => {
            disconnectSocket();
        };

    }, []);

    useEffect(() => {
        const handleNewMessage = (newMessage: any) => {
            setChats((prevChats) => [...prevChats, newMessage]);
        };

        subscribeToChat('general', handleNewMessage);

        return () => {
            disconnectSocket();
        };

    }, []);

    const handleSendMessage = async () => {
        if (message.trim()) {
            const messageData = {
                content: message,
                roomId: 'general',
            };

            try {
                await sendMessage(messageData.content, messageData);
                setMessage('');
            }
            catch (error) {
                console.error('There has been an error while sending the message', error);
            }
        }
    };

    if (loading) {
        return <ActivityIndicator size="large" color="0000ff" />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={chats}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Chat chat={item} />}
            />
            <TextInput
                style={styles.input}
                placeholder="Type your message..."
                value={message}
                onChangeText={setMessage}
            />
            <Button title="Send" onPress={handleSendMessage} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default ChatScreen;
