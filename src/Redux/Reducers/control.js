import {
    LOGIN_FAIL,
    POPULATE_USER,
    POPULATE_USER_FAIL,
    LOGIN_SUCCESS,
    REQUEST_START,
    REQUEST_FAIL,
    ADD_ACCOUNT,
    ADD_STRATEGY,
    DELETE_ACCOUNT,
    EDIT_ACCOUNT
} from '../constants';

const initialState = {
    isLoading: false,
    error: null,
};

export const control = (state = initialState, action = {}) => {
    switch (action.type) {
        case REQUEST_START:
            return { ...state, isLoading: true };
        case REQUEST_FAIL:
            return { ...state, isLoading: false, error: action.payload };
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false };
        case LOGIN_FAIL:
            return { ...state, isLoading: false, error: action.payload };
        case POPULATE_USER:
            return { ...state, isLoading: false };
        case POPULATE_USER_FAIL:
            return { ...state, isLoading: false, error: action.payload };
        case ADD_ACCOUNT:
            return { ...state, isLoading: false };
        case DELETE_ACCOUNT:
            return { ...state, isLoading: false };
        case EDIT_ACCOUNT:
            return { ...state, isLoading: false };
        case ADD_STRATEGY:
            return { ...state, isLoading: false };
        default:
            return state;
    }
};
