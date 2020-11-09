import React from 'react';
import { useParams } from 'react-router-dom';

import { dummyTrades } from '../dummyData/dummyTrades';

const Trades = (props) => {
    const { userId } = useParams();
    const trades = dummyTrades.filter(trade => trade.userId === userId);

    console.log(trades);
    return (
        <div>
            <h1>Trades of {userId}</h1>
            {trades.map((trade) => (
                <div>
                    <span>{trade.symbol}</span>
                    <span>{trade.amount}</span>
                </div>
            ))}
        </div>
    );
};

export default Trades;
