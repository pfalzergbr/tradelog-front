import React from 'react';
import { useParams } from 'react-router-dom';

import { dummyTrades } from '../dummyData/dummyTrades';

const TradeDetails = (props) => {
    const { tradeId } = useParams();

    const trade = dummyTrades.find((trade) => trade._id === tradeId);
    const { symbol, outcome, amount, date, description } = trade;

    return (
        <div>
            <h1>TradeDetails</h1>
            <h2>{symbol}</h2>
            <p>{outcome}</p>
            <span>{amount}</span>
            <p>{date}</p>
            <p>{description}</p>
            <button>Edit</button>
        </div>
    );
};

export default TradeDetails;
