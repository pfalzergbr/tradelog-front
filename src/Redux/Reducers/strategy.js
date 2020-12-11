import {
    FETCH_STRATEGIES_PENDING,
    FETCH_STRATEGIES_SUCCESS,
    POPULATE_USER,
} from '../constants';

const initialState = { strategies: [] };

export const strategy = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_STRATEGIES_PENDING:
            return { ...state };
        case FETCH_STRATEGIES_SUCCESS:
            return {
                ...state,
                strategies: action.payload.strategies,
            };
        case POPULATE_USER:
            return { ...state, accounts: action.payload.strategies };
        default:
            return state;
    }
};
