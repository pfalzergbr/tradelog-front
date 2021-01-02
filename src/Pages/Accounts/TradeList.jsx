import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTradesByAccount } from '../../Redux/Actions/tradeActions';
import { usePagination } from '../../Hooks/usePagination';
import Pagination from '../../Services/Pagination';
import Loading from '../Shared/Loading';

const TradeList = ({ account }) => {
  const { isLoading } = useSelector(state => state.control);
  const { user, token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const { paginate, paginatedData, pageNumbers } = usePagination();

  useEffect(() => {
    const fetchTrades = async (token, account) => {
      try {
        await dispatch(
          fetchTradesByAccount({
            url: `${process.env.REACT_APP_API}/api/trades/account/${account}`,
            auth: { Authorization: `Bearer ${token}` },
          }),
        );
      } catch (error) {
        console.log(error);
      }
    };
    const trades = fetchTrades(token, account);
    paginate(trades, 10);
  }, [token, paginate, account, dispatch]);

  return (
    <React.Fragment>
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          <Pagination
            data={paginatedData}
            pageNumbers={pageNumbers}
            userId={user.userId}
            itemType={'trade'}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default TradeList;
