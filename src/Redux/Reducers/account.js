import {
    FETCH_ACCOUNTS_PENDING,
    FETCH_ACCOUNTS_SUCCESS,
    FETCH_ACCOUNTS_FAIL,
    POPULATE_USER,
    LOAD_ACCOUNTS_SUCCESS,
} from '../constants';

const initialState = { accounts: []};

export const account = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_ACCOUNTS_PENDING:
            return { ...state};
        case FETCH_ACCOUNTS_FAIL:
            return { ...state, error: action.payload};
        case FETCH_ACCOUNTS_SUCCESS:
            return {
                ...state,
                accounts: action.payload.accounts,
            };
        case POPULATE_USER:
            return { ...state, accounts: action.payload.accounts };
        default:
            return state;
    }
};
