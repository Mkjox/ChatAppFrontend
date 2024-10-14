import axios from "axios";

const API_URL = 'http://localhost:5000/api/chats';

interface Chat {
    id: string;
    message: string;
    sender: string;
    timestamp: Date;
}

class ChatService {
    async fetchChats(): Promise<Chat[]> {
        try {
            const response = await axios.get<Chat[]>(API_URL);
            return response.data;
        }
        catch (error) {
            throw new Error('Failed to fetch chats');
        }
    }
}

export default new ChatService();