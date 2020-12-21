import {
    REQUEST_START,
    REQUEST_FAIL,
    LOGIN_SUCCESS,
    POPULATE_USER,
    ADD_ACCOUNT,
    ADD_STRATEGY,
    DELETE_ACCOUNT,
    EDIT_ACCOUNT,
    DELETE_STRATEGY,
    EDIT_STRATEGY,
    GET_TRADES,
    ADD_TRADE,
    LOAD_ACCOUNT_STATS,
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
        case POPULATE_USER:
            return { ...state, isLoading: false };
        case ADD_ACCOUNT:
            return { ...state, isLoading: false };
        case DELETE_ACCOUNT:
            return { ...state, isLoading: false };
        case EDIT_ACCOUNT:
            return { ...state, isLoading: false };
        case ADD_STRATEGY:
            return { ...state, isLoading: false };
        case DELETE_STRATEGY:
            return { ...state, isLoading: false };
        case EDIT_STRATEGY:
            return { ...state, isLoading: false };
        case GET_TRADES:
            return { ...state, isLoading: false };
        case ADD_TRADE:
            return { ...state, isLoading: false };
        case LOAD_ACCOUNT_STATS:
            return { ...state, isLoading: false };
        default:
            return state;
    }
};
