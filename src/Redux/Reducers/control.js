import { REQUEST_START, REQUEST_END } from '../constants';

const initialState = {
    isLoading: false,
    error: null
};

export const control = (state = initialState, actions = {}) => {
    switch (actions.type) {
        case REQUEST_START:
            return { ...state, isLoading: true };
        case REQUEST_END:
            return { ...state, isLoading: false };
        default:
            return state;
    }
};
