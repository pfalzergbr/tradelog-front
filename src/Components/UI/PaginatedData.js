import React from 'react';
import {Link} from 'react-router-dom';

import TradeItem from '../TradeItem'

const PaginatedData = (props) => {
    const { isLoading, pageData } = props;


    return (
        <React.Fragment>
            {isLoading && <Loading />}
            {!isLoading && (
                <div>
                    <h1>Paginated Trades</h1>
                    {pageData &&
                        pageData.map((item) => (
                            <Link key={item._id} to={`/item/${item._id}`}>
                                <TradeItem data={item} />
                            </Link>
                        ))}
                </div>
            )}
        </React.Fragment>
    );
};

export default PaginatedData;
