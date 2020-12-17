import { ADD_STRATEGY, POPULATE_USER, EDIT_STRATEGY, DELETE_STRATEGY } from '../constants';

const initialState = { strategies: [] };

export const strategy = (state = initialState, action = {}) => {
    switch (action.type) {
        case POPULATE_USER:
            return { ...state, strategies: action.payload.strategies };
        case ADD_STRATEGY:
            const newStrategy = action.payload.newStrategy;
            return { ...state, strategies: [...state.strategies, newStrategy]};
        case EDIT_STRATEGY:
            const updatedStrategy = action.payload.updatedStrategy;
            const updatedStrategies = state.strategies.map((strategy) =>
                strategy.strategy_id === updatedStrategy.strategy_id
                    ? updatedStrategy
                    : strategy,
            );
            return {
                ...state,
                strategies: updatedStrategies,
            };
        case DELETE_STRATEGY:
            const filteredStrategies = state.strategies.filter(
                (strategy) => strategy.strategy_id !== action.payload.strategy_id,
            );
            return { ...state, strategies: filteredStrategies };
        default:
            return state;
    }
};


export const selectAccountStrategies = (state, accountId) => {
    return state.strategy.strategies.filter(
        (strategy) => strategy.account_id === accountId,
    );
};


export const selectStrategy = (state, strategyId) => {
    return state.strategy.strategies.find(strategy => strategy.strategy_id === strategyId);
}