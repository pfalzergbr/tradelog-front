import { ADD_ACCOUNT, DELETE_ACCOUNT, EDIT_ACCOUNT } from '../constants';
import { handleThunk } from '../handleThunk';

export const addAccount = (accountData) => ({
    type: ADD_ACCOUNT,
    payload: { newAccount: accountData },
});

export const editAccount = (accountData) => ({
    type: EDIT_ACCOUNT,
    payload: { updatedAccount: accountData.updatedAccount },
});

export const deleteAccount = (accountData) => ({
    type: DELETE_ACCOUNT,
    payload: {account_id: accountData.deletedAccount.account_id}
})



//Thunks

export const updateAccount = (requestData) => {
    return handleThunk(requestData, editAccount);
}

export const addNewAccount = (requestData) => {
    return handleThunk(requestData, addAccount);
};

export const removeAccount = (requestData) => {
    return handleThunk(requestData, deleteAccount);
}