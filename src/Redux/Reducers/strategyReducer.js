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
    LOAD_STRATEGIES_SUCCESS,
} from '../constants';

const initialState = { strategies: [] };

export const strategyReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_STRATEGIES_PENDING:
            return { ...state};
        case FETCH_STRATEGIES_FAIL:
            return { ...state, error: action.payload};
        case FETCH_STRATEGIES_SUCCESS:
            return {
                ...state,
                strategies: action.payload.strategies,
            };
        case LOAD_STRATEGIES_SUCCESS:
            return { ...state, strategies: action.payload };
        default:
            return state;
    }
};
