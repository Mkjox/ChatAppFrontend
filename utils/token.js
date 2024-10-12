import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToken = async (token) => {
    try {
        await AsyncStorage.setItem('token', token);
    }
    catch (e) {
        console.error('Error storing token:', e);
    }
};

export const getToken = async () => {
    try {
        return await AsyncStorage.getItem('token');
    }
    catch (e) {
        console.error('Error retrieving token:', e);
    }
};

export const removeToken = async () => {
    try {
        await AsyncStorage.removeItem('token');
    }
    catch (e) {
        console.error('Error removing token:', e);
    }
};