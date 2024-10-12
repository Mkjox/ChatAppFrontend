import { Dispatch } from "redux";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (user: any) => (dispatch: Dispatch) => {
    dispatch({
        type: LOGIN,
        payload: { user },
    });
};

export const logout = () => (dispatch: Dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};