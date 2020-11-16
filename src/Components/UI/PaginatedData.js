import React from 'react';
import { Link } from 'react-router-dom';

import TradeItem from '../TradeItem';

const PaginatedData = (props) => {
    const { pageData, itemType } = props;

    return (
        <div>
            <h1>Paginated Trades</h1>
            {pageData &&
                pageData.map((item) => (
                    <Link key={item._id} to={`/${itemType}/${item._id}`}>
                        <TradeItem data={item} />
                    </Link>
                ))}
        </div>
    );
};

export default PaginatedData;
