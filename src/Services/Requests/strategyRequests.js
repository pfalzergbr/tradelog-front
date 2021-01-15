import { fetchStrategyStats } from '../../Redux/Actions/strategyActions';

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
    console.log(error);
  }
};