import { ADD_STRATEGY, EDIT_STRATEGY, DELETE_STRATEGY, LOAD_STRATEGY_STATS } from '../constants';
import { handleThunk } from '../handleThunk';

const addStrategy = (strategyData) => ({
    type: ADD_STRATEGY,
    payload: { newStrategy: strategyData.strategy },
});

const editStrategy = (strategyData) => ({
    type: EDIT_STRATEGY,
    payload: { updatedStrategy: strategyData.updatedStrategy },
});

const deleteStrategy = (strategyData) => ({
    type: DELETE_STRATEGY,
    payload: { strategy_id: strategyData.deletedStrategy.strategy_id },
});

const loadStrategyStats = (strategyStats) => ({
    type: LOAD_STRATEGY_STATS,
    payload: strategyStats
})


export const addNewStrategy = (requestData) =>
    handleThunk(requestData, addStrategy);

export const updateStrategy = (requestData) =>
    handleThunk(requestData, editStrategy);

export const removeStrategy = (requestData) =>
    handleThunk(requestData, deleteStrategy);

    export const fetchStrategyStats = (requestData) => handleThunk(requestData, loadStrategyStats)