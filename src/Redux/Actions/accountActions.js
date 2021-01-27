import { ADD_ACCOUNT, DELETE_ACCOUNT, EDIT_ACCOUNT, LOAD_ACCOUNT_STATS } from '../constants';
import { handleThunk } from '../handleThunk';

const addAccount = (accountData) => ({
    type: ADD_ACCOUNT,
    payload: { newAccount: accountData.account, newStrategy: accountData.strategy },
});

const editAccount = (accountData) => ({
    type: EDIT_ACCOUNT,
    payload: { updatedAccount: accountData.updatedAccount },
});

const deleteAccount = (accountData) => ({
    type: DELETE_ACCOUNT,
    payload: {account_id: accountData.deletedAccount.account_id}
})

const loadAccountStats = (accountStats) => ({
    type: LOAD_ACCOUNT_STATS,
    payload: accountStats
})

export const updateAccount = (requestData) => handleThunk(requestData, editAccount);
export const addNewAccount = (requestData) => handleThunk(requestData, addAccount);
export const removeAccount = (requestData) => handleThunk(requestData, deleteAccount);
export const fetchAccountStats = (requestData) => handleThunk(requestData, loadAccountStats)