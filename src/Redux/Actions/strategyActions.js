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
    LOAD_STRATEGIES_SUCCESS,
} from '../constants';
// import { fetchStrategiesService } from '../../Services/strategiesService';

export const loadStrategies = (userData) => ({
    type: LOAD_STRATEGIES_SUCCESS,
    payload: userData.strategies,
});

// export const updateStrategyDetails = () => {
//     const onSuccess = (strategyData) => {};

//     const onError = (error) => {};
//     try {
//     } catch (error) {}
// };

// export const deleteAccount = () => {
//     const onSuccess = (strategyData) => {};

//     const onError = (error) => {};
//     try {
//     } catch (error) {}
// };
