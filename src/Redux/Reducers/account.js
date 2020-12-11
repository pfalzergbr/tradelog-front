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

        default:
            return state;
    }
};
