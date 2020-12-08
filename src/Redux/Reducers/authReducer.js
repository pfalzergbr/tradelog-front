import {
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    LOAD_USER,
} from '../Actions/constants';

const initialState = {
    user: {
        userName: null,
        userId: null,
    },
    token: null,
    isLoading: false,
};

export const authReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOGIN_PENDING:
            return { ...state, isLoading: true };
        case LOGIN_FAIL:
            return { ...state, error: action.payload, isLoading: false };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isLoading: false,
            };
        case LOAD_USER:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            };
        case LOGOUT:
            return { ...initialState };
        default:
            return state;
    }
};
