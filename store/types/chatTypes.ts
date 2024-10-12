export const SEND_MESSAGE = 'SEND_MESSAGE';

export interface SendMessageAction {
    type: typeof SEND_MESSAGE;
    payload: {
        message: string;
        roomId: string;
    };
}