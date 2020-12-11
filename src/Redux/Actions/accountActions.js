import {
    FETCH_ACCOUNTS_SUCCESS,
    FETCH_ACCOUNTS_FAIL,
    ADD_ACCOUNT,
    ADD_ACCOUNT_FAIL,
} from '../constants';
import { requestStart, requestEnd } from './requestActions';

import { requestService } from '../../Services/requestService';

// export const fetchAccounts = (data) => async (dispatch) => {
//     const onSuccess = (accountsData) => {
//         dispatch({ type: FETCH_ACCOUNTS_SUCCESS, payload: accountsData });
//         return accountsData;
//     };

//     const onError = (error) => {
//         dispatch({ type: FETCH_ACCOUNTS_FAIL, payload: error });
//         return error;
//     };
//     try {
//         dispatch({type: REQUEST_START })
//         const result = await requestService(data)
//         return onSuccess(result.data);

//     } catch (error) {
//         return onError(error);
//     }
// };

export const addAccount = (accountData) => ({
    type: ADD_ACCOUNT,
    payload: { newAccount: accountData },
});

export const addAccountFail = (error) => ({
    type: ADD_ACCOUNT_FAIL,
    payload: error
});

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
        const accountData = response.data
        return onSuccess(accountData);
    } catch (error) {
        return onError(error);
    }
};
