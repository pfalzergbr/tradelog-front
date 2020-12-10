import { LOAD_STRATEGIES_SUCCESS } from '../constants';

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
