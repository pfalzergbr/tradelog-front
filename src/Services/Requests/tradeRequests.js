import { fetchTrades, addNewTrade } from '../../Redux/Actions/tradeActions';
import { toast } from 'react-toastify';

export const fetchTradesByAccount = async (token, account, dispatch) => {
  try {
    const response = await dispatch(
      fetchTrades({
        url: `${process.env.REACT_APP_API}/api/trades/account/${account.account_id}`,
        auth: { Authorization: `Bearer ${token}` },
      }),
    );
    return response;
  } catch (error) {
    toast.error(`Cannot fetch data. Please try again!`)
  }
};

export const fetchTradesByStrategy = async (token, strategy, dispatch) => {
  try {
    const response = await dispatch(
      fetchTrades({
        url: `${process.env.REACT_APP_API}/api/trades/strategy/${strategy.strategy_id}`,
        auth: { Authorization: `Bearer ${token}` },
      }),
    );
    return response;
  } catch (error) {
    toast.error(`Cannot fetch data. Please try again!`)
  }
};




export const addTrade = async (data, token, dispatch) => {
  const tradeData = data;

  try {
    const response = await dispatch(
      addNewTrade({
        method: 'post',
        url: `${process.env.REACT_APP_API}/api/trades`,
        data: tradeData,
        auth: { Authorization: `Bearer ${token}` },
      }),
    );
    toast(`New trade added - ${response.trade.symbol} `)
    return response;
  } catch (error) {
    toast.error(`Something went wrong. Please try again!`)
  }
}