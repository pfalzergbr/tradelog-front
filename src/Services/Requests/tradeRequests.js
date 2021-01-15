import { fetchTrades } from '../../Redux/Actions/tradeActions';

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
    console.log(error);
  }
};
