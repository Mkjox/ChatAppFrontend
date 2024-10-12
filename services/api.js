import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching users', error);
        throw error;
    }
};

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, {
            email, password
        });
        return response.data;
    }
    catch (error) {
        console.error('Error logging in', error);
        throw error;
    }
};
