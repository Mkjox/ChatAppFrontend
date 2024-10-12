import axios from 'axios';
import { getToken } from './token';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

api.interceptors.request.use(async (config) => {
    const token = await getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;