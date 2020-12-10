import {
    REQUEST_START, REQUEST_END,
    // FETCH_ACCOUNTS_PENDING,
    LOAD_STRATEGIES_SUCCESS,
    LOAD_ACCOUNTS_SUCCESS,
    LOAD_ACCOUNTS_FAIL,
    FETCH_ACCOUNTS_SUCCESS,
    FETCH_ACCOUNTS_FAIL,
    // UPDATE_ACCOUNT_DETAILS_PENDING,
    // UPDATE_ACCOUNT_DETAILS_SUCCES,
    // UPDATE_ACCOUNT_DETAILS_FAIL,
    // DELETE_ACCOUNT_PENDING,
    // DELETE_ACCOUNT_SUCCESS,
    // DELETE_ACCOUNT_FAIL,

} from '../constants';
import { requestService } from '../../Services/requestService';

export const fetchAccounts = (data) => async (dispatch) => {
    const onSuccess = (accountsData) => {
        dispatch({ type: FETCH_ACCOUNTS_SUCCESS, payload: accountsData });
        dispatch({ type: REQUEST_END });
        return accountsData;
    };

    const onError = (error) => {
        dispatch({ type: FETCH_ACCOUNTS_FAIL, payload: error });
        return error;
    };
    try {
        dispatch({type: REQUEST_START })
        const result = await requestService(data)
        return onSuccess(result.data);

    } catch (error) {
        return onError(error);
    }
};

export const loadUserData = (data) => async (dispatch) => {
    const onSuccess = (userData) => {
        dispatch({ type: LOAD_ACCOUNTS_SUCCESS, payload: userData.accounts });
        dispatch({ type: LOAD_STRATEGIES_SUCCESS, payload: userData.strategies });
        dispatch({ type: REQUEST_END });
        return userData;
    };

    const onError = (error) => {
        dispatch({ type: LOAD_ACCOUNTS_FAIL, payload: error });
        dispatch({ type: REQUEST_END });
        return error;
    };
    try {
        dispatch({type: REQUEST_START })
        const result = await requestService(data)
        return onSuccess(result.data);

    } catch (error) {
        return onError(error);
    }
};



export const updateAccountDetails = () => {
    const onSuccess = (accountsData) => {};

    const onError = (error) => {};
    try {
    } catch (error) {}
};

export const deleteAccount = () => {
    const onSuccess = (accountsData) => {};

    const onError = (error) => {};
    try {
    } catch (error) {}
};
