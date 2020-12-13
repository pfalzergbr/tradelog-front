import { ADD_ACCOUNT, ADD_ACCOUNT_FAIL, DELETE_ACCOUNT, DELETE_ACCOUNT_FAIL, EDIT_ACCOUNT, EDIT_ACCOUNT_FAIL } from '../constants';
import { requestStart } from './requestActions';

import { requestService } from '../../Services/requestService';

export const addAccount = (accountData) => ({
    type: ADD_ACCOUNT,
    payload: { newAccount: accountData },
});

export const addAccountFail = (error) => ({
    type: ADD_ACCOUNT_FAIL,
    payload: error,
});

export const editAccount = (accountData) => ({
    type: EDIT_ACCOUNT,
    payload: { updatedAccount: accountData.updatedAccount },
});

export const editAccountFail = (error) => ({
    type: EDIT_ACCOUNT_FAIL,
    payload: error,
});

export const deleteAccount = (accountData) => ({
    type: DELETE_ACCOUNT,
    payload: {account_id: accountData.deletedAccount.account_id}
})

export const deleteAccountFail = (error) => ({
    type: DELETE_ACCOUNT_FAIL,
    payload: error
})


//Thunks

export const addNewAccount = (data) => async (dispatch) => {
    const onSuccess = (accountData) => {
        dispatch(addAccount(accountData));
        return accountData;
    };

    const onError = (error) => {
        dispatch(addAccountFail(error));
        return error;
    };

    try {
        dispatch(requestStart());
        const response = await requestService(data);
        const accountData = response.data;
        return onSuccess(accountData);
    } catch (error) {
        return onError(error);
    }
};

export const patchAccount = (data) => async (dispatch) => {
    const onSuccess = (accountData) => {
        dispatch(editAccount(accountData));
        return accountData;
    };

    const onError = (error) => {
        dispatch(editAccountFail(error));
        return error;
    };

    try {
        dispatch(requestStart());
        const response = await requestService(data);
        const accountData = response.data;
        return onSuccess(accountData);
    } catch (error) {
        return onError(error);
    }
};

export const removeAccount = (data) => async (dispatch) => {
    const onSuccess = (accountData) => {
        dispatch(deleteAccount(accountData));
        return accountData;
    };

    const onError = (error) => {
        dispatch(deleteAccountFail(error));
        return error;
    };

    try {
        dispatch(requestStart());
        const response = await requestService(data);
        const accountData = response.data;
        return onSuccess(accountData);
    } catch (error) {
        return onError(error);
    }
}