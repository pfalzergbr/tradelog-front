import { REQUEST_START, REQUEST_END } from '../constants';

const initialState = {
    isLoading: false,
};

export const requestReducer = (state = initialState, actions = {}) => {
    switch (actions.type) {
        case REQUEST_START:
            return { ...state, isLoading: true };
        case REQUEST_END:
            return { ...state, isLoading: false };
        default:
            return state;
    }
};
