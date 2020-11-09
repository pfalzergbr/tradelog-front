import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import { dummyTrades } from '../dummyData/dummyTrades';

import TradeItem from '../Components/TradeItem';

const Trades = (props) => {
    const { userId } = useParams();
    const history = useHistory();
    const trades = dummyTrades.filter(trade => trade.userId === userId);

    const addTrade = () => {
        history.push(`/${userId}/newTrade`)
    }

    return (
        <div>
            <h1>Trades of {userId}</h1>
            {trades.map((trade) => (
                <Link to={`/trade/${trade._id}`}><TradeItem data={trade}/></Link>
            ))}
            <button onClick={addTrade}> + </button>
        </div>
    );
};

export default Trades;
