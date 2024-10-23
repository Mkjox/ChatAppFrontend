import { StyleSheet } from 'react-native';

export const lightTheme = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        color: '#000',
    },
    card: {
        backgroundColor: '#fff',
    },
    text: {
        color: '#000',
    },
    icon :{
        color: '#333',
    },
    button: {
        backgroundColor: '#6200EE',
    },
    primaryColor: {
        color: '#6200EE',
    },
    switchTrack: {
        false: '#767577',
        true: '#81b0ff',
    },
    switchThumb: {
        false: '#f4f3f4',
        true: '#f5dd4b',
    },
});

export const darkTheme = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        color: '#fff',
    },
    card: {
        backgroundColor: '#1F1B24',
    },
    text: {
        color: '#fff',
    },
    icon: {
        color: '#fff',
    },
    button: {
        backgroundColor: '#BB86FC',
    },
    primaryColor: {
        color: '#BB86FC',
    },
    switchTrack: {
        false: '#767577',
        true: '#767577',
    },
    switchThumb: {
        false: '#f4f3f4',
        true: '#f4f3f4',
    },
});
