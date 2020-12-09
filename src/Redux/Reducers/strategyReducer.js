import {
    FETCH_STRATEGIES_PENDING,
    FETCH_STRATEGIES_SUCCESS,
    FETCH_STRATEGIES_FAIL,
    // UPDATE_STRATEGY_DETAILS_PENDING,
    // UPDATE_STRATEGY_DETAILS_SUCCES,
    // UPDATE_STRATEGY_DETAILS_FAIL,
    // DELETE_STRATEGY_PENDING,
    // DELETE_STRATEGY_SUCCESS,
    // DELETE_STRATEGY_FAIL,
    LOAD_STRATEGIES,
} from '../Actions/constants';

const initialState = { strategies: [], isLoading: false };

export const strategyReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_STRATEGIES_PENDING:
            return { ...state, isLoading: true };
        case FETCH_STRATEGIES_FAIL:
            return { ...state, error: action.payload, isLoading: false };
        case FETCH_STRATEGIES_SUCCESS:
            return {
                ...state,
                STRATEGIES: action.payload.strategies,
                isLoading: false,
            };
        case LOAD_STRATEGIES:
            return { ...state, strategies: action.payload.strategies };
        default:
            return state;
    }
};
