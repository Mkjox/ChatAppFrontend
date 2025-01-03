import { Dispatch } from "redux";

export const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessage = (message: string, roomId: string) => (dispatch: Dispatch) => {
    dispatch({
        type: SEND_MESSAGE,
        payload: { message, roomId },
    });
};