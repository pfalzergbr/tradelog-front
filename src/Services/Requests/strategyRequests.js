import { toast } from 'react-toastify';
import {
  fetchStrategyStats,
  addNewStrategy,
  updateStrategy,
  removeStrategy,
} from '../../Redux/Actions/strategyActions';


export const loadStrategyStats = async (token, account, dispatch) => {
  try {
    const response = await dispatch(
      fetchStrategyStats({
        url: `${process.env.REACT_APP_API}/api/strategy/stats/${account.account_id}`,
        auth: { Authorization: `Bearer ${token}` },
      }),
    );
    return response;
  } catch (error) {
    toast.error('Data cannot be loaded. Please try again later.');
  }
};



export const newStrategy = async (data, accountId, token, dispatch) => {
  try {
    const newStrategyData = {
      ...data,
      accountId,
    };
    const response = await dispatch(
      addNewStrategy({
        method: 'post',
        url: `${process.env.REACT_APP_API}/api/strategy`,
        data: newStrategyData,
        auth: { Authorization: `Bearer ${token}` },
      }),
    );
    toast(`New Strategy added!`)
    return response;
  } catch (error) {
    toast.error('Data cannot be loaded. Please try again later.');
  }
}


export const editStrategy = async (data, strategyId, token, dispatch) => {
  try {
    const response = await dispatch(
      updateStrategy({
        method: 'patch',
        url: `${process.env.REACT_APP_API}/api/strategy/${strategyId}`,
        data: data,
        auth: { Authorization: `Bearer ${token}` },
      }),
    );
    toast('Strategy updated successfully!')
    return response;
  } catch (error) {
    toast.error('Something went wrong. Please try again later');
  }
}

export const deleteStrategy = async (strategyId, token, dispatch) => {
  try {
    const response = await dispatch(
      removeStrategy({
        method: 'delete',
        url: `${process.env.REACT_APP_API}/api/strategy/${strategyId}`,
        auth: { Authorization: `Bearer ${token}` },
      }),
    );
    toast('Strategy deleted')
    return response;
  } catch (error) {
    toast.error('Something went wrong. Please try again later');
  }
};
