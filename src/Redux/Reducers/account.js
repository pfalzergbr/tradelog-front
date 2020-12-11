import {
    POPULATE_USER,
    ADD_ACCOUNT
} from '../constants';

const initialState = { accounts: []};

export const account = (state = initialState, action = {}) => {
    switch (action.type) {
        case POPULATE_USER:
            return { ...state, accounts: action.payload.accounts };
        case ADD_ACCOUNT:
            return {...state, accounts: [...state.accounts, action.payload.newAccount ]}
        // case FETCH_ACCOUNTS_FAIL:
        //     return { ...state, error: action.payload};
        // case FETCH_ACCOUNTS_SUCCESS:
        //     return {
        //         ...state,
        //         accounts: action.payload.accounts,
        //     };
        default:
            return state;
    }
};
