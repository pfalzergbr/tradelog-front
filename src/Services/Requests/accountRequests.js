import { fetchAccountStats } from '../../Redux/Actions/accountActions';

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
    console.log(error);
  }
}