import {
    // FETCH_STRATEGIES_PENDING,
    // FETCH_STRATEGIES_SUCCESS,
    // FETCH_STRATEGIES_FAIL,
    // UPDATE_STRATEGY_DETAILS_PENDING,
    // UPDATE_STRATEGY_DETAILS_SUCCES,
    // UPDATE_STRATEGY_DETAILS_FAIL,
    // DELETE_STRATEGY_PENDING,
    // DELETE_STRATEGY_SUCCESS,
    // DELETE_STRATEGY_FAIL,
    LOAD_STRATEGIES,
} from '../Actions/constants';
import { fetchStrategiesService } from '../../Services/strategiesService';

// export const fetchAccounts = (token) => async (dispatch) => {
//     const onSuccess = (strategyData) => {
//         dispatch({ type: FETCH_STRATEGIES_SUCCESS, payload: strategyData });
//         return strategyData;
//     };

//     const onError = (error) => {
//         dispatch({ type: FETCH_STRATEGIES_FAIL, payload: error });
//         return error;
//     };
//     try {
//         dispatch({type: FETCH_STRATEGIES_PENDING })
//         const result = await fetchStrategiesService(token)
//         return onSuccess(result.data);

//     } catch (error) {
//         return onError(error);
//     }
// };

export const loadStrategies = (strategies) => ({
    type: LOAD_STRATEGIES, payload: strategies
})

export const updateStrategyDetails = () => {
    const onSuccess = (strategyData) => {};

    const onError = (error) => {};
    try {
    } catch (error) {}
};

export const deleteAccount = () => {
    const onSuccess = (strategyData) => {};

    const onError = (error) => {};
    try {
    } catch (error) {}
};
