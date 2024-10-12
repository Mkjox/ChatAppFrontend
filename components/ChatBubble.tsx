import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatBubble = ({ message, isSender}) => {
    return (
        <View style={[styles.bubble, isSender ? styles.sender : styles.receiver]}>
            <Text>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    bubble: {
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
    },
    sender: {
        backgroundColor: '#DCF8C6',
        alignSelf: 'flex-end',
    },
    receiver: {
        backgroundColor: '#EDEDED',
        alignSelf: 'flex-start',
    },
});

export default ChatBubble;
