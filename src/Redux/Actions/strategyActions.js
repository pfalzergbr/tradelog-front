import { ADD_STRATEGY, ADD_STRATEGY_FAIL } from '../constants';
import { requestStart } from './requestActions';
import { requestService } from '../../Services/requestService';

export const addStrategy = (strategyData) => ({
    type: ADD_STRATEGY,
    payload: { newStrategy: strategyData },
});

export const addStrategyFail = (error) => ({
    type: ADD_STRATEGY_FAIL,
    payload: error,
});

export const addNewStrategy = (data) => async (dispatch) => {
    const onSuccess = (strategyData) => {
        dispatch(addStrategy(strategyData));
        return strategyData;
    };

    const onError = (error) => {
        dispatch(addStrategyFail(error));
        return error;
    };

    try {
        dispatch(requestStart());
        const response = await requestService(data);
        const strategyData = response.data;
        return onSuccess(strategyData);
    } catch (error) {
        return onError(error);
    }
};
