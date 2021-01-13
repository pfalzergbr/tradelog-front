import React from 'react';
import { Link } from 'react-router-dom';

import TradeItem from '../Table/TradeItem';

const PaginatedData = ({ pageData }) => {
  return (
    <div className="table-body">
      {pageData &&
        pageData.map(item => (
          <Link key={item.trade_id} to={`/trade/${item.trade_id}`}>
            <TradeItem data={item} />
          </Link>
        ))}
    </div>
  );
};

export default PaginatedData;
