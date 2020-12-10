import {
    FETCH_ACCOUNTS_PENDING,
    FETCH_ACCOUNTS_SUCCESS,
    FETCH_ACCOUNTS_FAIL,
    UPDATE_ACCOUNT_DETAILS_PENDING,
    UPDATE_ACCOUNT_DETAILS_SUCCES,
    UPDATE_ACCOUNT_DETAILS_FAIL,
    DELETE_ACCOUNT_PENDING,
    DELETE_ACCOUNT_SUCCESS,
    DELETE_ACCOUNT_FAIL,
    LOAD_ACCOUNTS,
} from '../constants';

const initialState = { accounts: [], isLoading: false };

export const accountReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_ACCOUNTS_PENDING:
            return { ...state, isLoading: true };
        case FETCH_ACCOUNTS_FAIL:
            return { ...state, error: action.payload, isLoading: false };
        case FETCH_ACCOUNTS_SUCCESS:
            return {
                ...state,
                accounts: action.payload.accounts,
                isLoading: false,
            };
        case LOAD_ACCOUNTS:
            return { ...state, accounts: action.payload.accounts };
        default:
            return state;
    }
};
