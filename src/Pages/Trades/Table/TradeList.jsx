import React from 'react';

import Pagination from '../Pagination/Pagination';
import LoadingGroup from '../../Shared/LoadingGroup';

const TradeList = ({ trades, handleSort }) => {
  return (
    <LoadingGroup>
        <Pagination data={trades} handleSort={handleSort} />
    </LoadingGroup>
  );
};

export default TradeList;
