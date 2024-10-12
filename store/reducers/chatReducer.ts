const initialState = {
    messages: [] as string[],
};

const chatReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return {
                ...state,
                message: [...state.messages, action.payload.message],
            };
        default:
            return state;
    }
};

export default chatReducer;