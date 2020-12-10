import {
    FETCH_ACCOUNTS_PENDING,
    FETCH_ACCOUNTS_SUCCESS,
    FETCH_ACCOUNTS_FAIL,
    UPDATE_ACCOUNT_DETAILS_PENDING,
    UPDATE_ACCOUNT_DETAILS_SUCCES,
    UPDATE_ACCOUNT_DETAILS_FAIL,
    DELETE_ACCOUNT_PENDING,
    DELETE_ACCOUNT_SUCCESS,
    DELETE_ACCOUNT_FAIL,
    LOAD_ACCOUNTS
} from '../constants';
import { fetchAccountService } from '../../Services/accountService';

export const fetchAccounts = (token) => async (dispatch) => {
    const onSuccess = (accountsData) => {
        dispatch({ type: FETCH_ACCOUNTS_SUCCESS, payload: accountsData });
        return accountsData;
    };

    const onError = (error) => {
        dispatch({ type: FETCH_ACCOUNTS_FAIL, payload: error });
        return error;
    };
    try {
        dispatch({type: FETCH_ACCOUNTS_PENDING })
        const result = await fetchAccountService(token)
        return onSuccess(result.data);

    } catch (error) {
        return onError(error);
    }
};

export const loadAccounts = (accounts) => ({
    type: LOAD_ACCOUNTS, payload: accounts
})

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
