import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { dummyTrades } from '../dummyData/dummyTrades';

import TradeItem from '../Components/TradeItem';

const Trades = (props) => {
    const { userId } = useParams();
    const trades = dummyTrades.filter(trade => trade.userId === userId);

    return (
        <div>
            <h1>Trades of {userId}</h1>
            {trades.map((trade) => (
                <Link to={`/trade/${trade._id}`}><TradeItem data={trade}/></Link>
            ))}
        </div>
    );
};

export default Trades;
