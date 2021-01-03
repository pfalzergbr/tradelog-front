import React from 'react';
import { useSelector } from 'react-redux';

import Pagination from '../Trades/Pagination';
import Loading from '../Shared/Loading';

const TradeList = ({ trades }) => {
  const { isLoading } = useSelector(state => state.control);

  return (
    <React.Fragment>
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          <div>
            <Pagination data={trades} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default TradeList;
