import React from 'react';
import { useParams } from 'react-router-dom';


const TradeDetails = (props) => {
    const { tradeId } = useParams();

    //TODO!!


    const { symbol, outcome, amount } = props;

    return (
        <div>
            <h1>TradeDetails</h1>
            <h2>{symbol}</h2>
            <p>{outcome}</p>
            <span>{amount}</span>
            <button>Edit</button>
        </div>
    );
};

export default TradeDetails;
