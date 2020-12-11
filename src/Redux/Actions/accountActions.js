import { ADD_ACCOUNT, ADD_ACCOUNT_FAIL, DELETE_ACCOUNT, DELETE_ACCOUNT_FAIL } from '../constants';
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

export const deleteAccount = (accountData) => ({
    type: DELETE_ACCOUNT,
    payload: {account_id: accountData.account_id}
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
