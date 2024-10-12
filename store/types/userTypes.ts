export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export interface LoginAction {
    type: typeof LOGIN;
    payload: {
        user: any;
    };
}

export interface LogoutAction {
    type: typeof LOGOUT;
}