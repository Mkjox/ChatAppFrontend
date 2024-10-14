import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
});

export const fetchMessages = async () => {
    try {
        const response = await api.get('/messages');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching messages', error);
        throw error;
    }
};

export const sendMessage = async (content: string, messageData: { content: string; roomId: string; }) => {
    try {
        const response = await api.post('/messages', messageData);
        return response.data;
    }
    catch (error) {
        console.error('Error sending message', error);
        throw error;
    }
};

export const fetchUsers = async () => {
    try {
        const response = await api.get(`${API_URL}/users`);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching users', error);
        throw error;
    }
};

export const login = async (email: string, password: string) => {
    try {
        const response = await api.post(`${API_URL}/auth/login`, {
            email, password,
        });
        return response.data;
    }
    catch (error) {
        console.error('Error logging in', error);
        throw error;
    }
};
