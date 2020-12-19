import React from 'react';
import { Link } from 'react-router-dom';

import TradeItem from '../Trades/TradeItem';

const PaginatedData = (props) => {
    const { pageData, itemType } = props;

    return (
        <div>
            <h1>Trades</h1>
            {pageData &&
                pageData.map((item) => (
                    <Link key={item.trade_id} to={`/${itemType}/${item.trade_id}`}>
                        <TradeItem data={item} />
                    </Link>
                ))}
        </div>
    );
};

export default PaginatedData;
