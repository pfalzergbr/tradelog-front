import React from 'react';

import Pagination from '../Pagination/Pagination';
import LoadingGroup from '../../Shared/LoadingGroup';
import TradeListHeader from './TradeListHeader';

const TradeList = ({ trades }) => {
  return (
    <LoadingGroup>
      <div className="table-container">
        <TradeListHeader />
        <Pagination data={trades} />
      </div>
    </LoadingGroup>
  );
};

export default TradeList;
