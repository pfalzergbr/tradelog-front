import React from 'react';

import TradeItem from '../Table/TradeItem';

const PaginatedData = ({ pageData }) => {
  return (
    <tbody className="table-body">
      {pageData &&
        pageData.map(item => (
            <TradeItem key={item.trade_id} data={item} />

        ))}
    </tbody>
  );
};

export default PaginatedData;
