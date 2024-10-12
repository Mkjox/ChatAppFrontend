import io, { Socket } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:5000';

let socket: Socket | undefined;

export const initiateSocketConnection = (): void => {
    socket = io(SOCKET_URL);
    console.log('Connecting to socket...');
};

export const disconnectSocket = (): void => {
    if (socket) {
        socket.disconnect();
    }
};

export const subscribeToChat = (roomId: string, callback: (message: any) => void): void => {
    if (!socket) {
        return;
    }

    socket.emit('joinRoom', roomId);
    socket.on('message', (message) => {
        console.log('Message received:', message);
        callback(message);
    });
};

export const sendMessage = (roomId: string, message: string) => {
    if (socket) {
        socket.emit('chatMessage', { roomId, message });
    }
};