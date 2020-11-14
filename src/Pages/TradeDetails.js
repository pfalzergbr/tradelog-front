import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { AuthContext } from '../Context/MainContext';
import { useAxios } from '../Hooks/useAxios';

const TradeDetails = (props) => {
    const { token } = useContext(AuthContext);
    const { isLoading, sendRequest } = useAxios();
    const [ trade, setTrade] = useState({});
    const { tradeId } = useParams();
    const { symbol, outcome, amount} = trade;

    //TODO!!
    useEffect(() => {
        const fetchTrade = async () => {
            const response = await sendRequest(
                `http://localhost:3000/api/trades/${tradeId}`,
                'GET',
                {},
                {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            );
            setTrade(response.data);
        };
        fetchTrade()
    }, []);



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
