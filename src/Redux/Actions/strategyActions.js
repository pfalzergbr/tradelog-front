import { ADD_STRATEGY } from '../constants';

export const addStrategy = (strategyData) => ({
    type: ADD_STRATEGY,
    payload: { newStrategy: strategyData },
});

export const addNewStrategy = (requestData) => handleThunk(requestData, addStrategy);

