import { combineReducers } from "redux";
import chatReducer from './chatReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    chat: chatReducer,
    user: userReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;