import { toast } from 'react-toastify';
import {
  addNewAccount,
  fetchAccountStats,
  updateAccount,
  removeAccount
} from '../../Redux/Actions/accountActions';

export const loadAccountStats = async (token, dispatch) => {
  try {
    const response = await dispatch(
      fetchAccountStats({
        url: `${process.env.REACT_APP_API}/api/account/stats`,
        auth: { Authorization: `Bearer ${token}` },
      }),
    );
    return response;
  } catch (error) {
    toast.error('Data cannot be loaded. Please try again later.');
  }
};

export const addAccount = async (data, token, dispatch) => {
  try {
    const response = await dispatch(
      addNewAccount({
        method: 'post',
        url: `${process.env.REACT_APP_API}/api/account`,
        data,
        auth: { Authorization: `Bearer ${token}` },
      }),
    );
    toast(`New account added`);
    return response;
  } catch (error) {
    toast.error('Something went wrong. Please try again later');
    console.log(error);
  }
};

export const editAccount = async (data, accountId, token, dispatch) => {
  try {
    const response = await dispatch(
      updateAccount({
        method: 'patch',
        url: `${process.env.REACT_APP_API}/api/account/${accountId}`,
        data,
        auth: { Authorization: `Bearer ${token}` },
      }),
    );
    toast(`Account edited`);
    return response;
  } catch (error) {
    toast.error('Something went wrong. Please try again later');
  }
};


export const deleteAccount = async (accountId, token, dispatch) => {
  try {
    const response = await dispatch(
      removeAccount({
        method: 'delete',
        url: `${process.env.REACT_APP_API}/api/account/${accountId}`,
        auth: { Authorization: `Bearer ${token}` },
      }),
    );
    toast(`Account deleted.`);
    return response;
  } catch (error) {
    toast.error('Something went wrong. Please try again later');
  }
}
