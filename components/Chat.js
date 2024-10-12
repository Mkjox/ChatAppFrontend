import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import socket from '../utils/socket';
import api from "../utils/axiosConfig";

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await api.get('/messages');
                setMessages(response.data);
            }
            catch (error) {
                console.error('Error fetching messages', error);
            }
        };
        fetchMessages();
    }, []);

    useEffect(() => {
        socket.on('message', (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });
        return () => socket.off('message');
    }, []);

    const sendMessage = () => {
        if (message.trim()) {
            const messageData = {
                content: message,
                roomId: 'general',
            };
            socket.emit('chatMessage', messageData);
            setMessage('');
        }
    };

    return (
        <View>
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Text>{item.content}</Text>}
            />
            <TextInput
                value={message}
                onChangeText={(text) => setMessage(text)}
                placeholder="Type a message"
            />
            <Button title="Send" onPress={sendMessage} />
        </View>
    );
};

export default Chat;