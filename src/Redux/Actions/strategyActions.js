import { ADD_STRATEGY } from '../constants';


export const addStrategy = (strategyData) => ({
    type: ADD_STRATEGY,
    payload: { newStrategy: strategyData },
});


export const addNewStrategy = (requestData) =>  {
    return handleThunk(requestData, addStrategy);
};
