import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    LOAD_USER,
} from '../constants';

const initialState = {
    user: {
        userName: null,
        userId: null,
    },
    token: null,
};

export const auth = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOGIN_FAIL:
            return { ...state, error: action.payload };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
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
