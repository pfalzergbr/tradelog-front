import {
    LOGIN_PENDING,
    LOGIN_FAIL,
    POPULATE_USER_FAIL,
    LOGIN_SUCCESS,
    REQUEST_START,
} from '../constants';

const initialState = {
    isLoading: false,
    error: null,
};

export const control = (state = initialState, actions = {}) => {
    switch (actions.type) {
        case REQUEST_START:
            return { ...state, isLoading: true };
        case LOGIN_PENDING:
            return { ...state, isLoading: true };
        case LOGIN_FAIL:
            return { ...state, isLoading: false, error: actions.payload };
        case POPULATE_USER_FAIL:
            return { ...state, isLoading: false, error: actions.payload };
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false };
        default:
            return state;
    }
};
