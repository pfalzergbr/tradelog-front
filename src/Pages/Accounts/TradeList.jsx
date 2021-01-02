import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { usePagination } from '../../Hooks/usePagination';
import TradeItem from '../Trades/TradeItem'
import Pagination from '../../Services/Pagination';
import Loading from '../Shared/Loading';

const TradeList = ({ trades }) => {
  const { isLoading } = useSelector(state => state.control);
  const { user } = useSelector(state => state.auth);
  const { paginate, paginatedData, pageNumbers } = usePagination();
  
  console.log(trades)
  // console.log(isLoading)

  return (
    <React.Fragment>
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          <h1>TradeList</h1>
          <ul>
          { trades && trades.map(trade => 
            <TradeItem data={trade} key={trade.id} />
          )}
        </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default TradeList;
