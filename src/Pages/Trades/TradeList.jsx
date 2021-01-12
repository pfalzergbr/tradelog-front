import React from 'react';

import Pagination from './Pagination/Pagination';
import LoadingGroup from '../Shared/LoadingGroup';


const TradeList = ({ trades }) => {
  return (
    <LoadingGroup>
      <Pagination data={trades} />
    </LoadingGroup>
  );
};

export default TradeList;
