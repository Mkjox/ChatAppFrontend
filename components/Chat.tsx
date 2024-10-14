import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Chat = ({ chat }: { chat: any }) => {
    return (
        <View style={styles.chatContainer}>
            <Text style={styles.chatContent}>{chat.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    chatContainer: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f1f1f1',
        borderRadius: 8,
    },
    chatContent: {
        fontSize: 16,
    },
});

export default Chat;
