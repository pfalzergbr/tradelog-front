import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import { AuthContext } from '../Context/MainContext'
import { useAxios } from '../Hooks/useAxios';
import TradeItem from '../Components/TradeItem';

const Trades = (props) => {
    const { user, token } = useContext(AuthContext);
    const { isLoading, sendRequest } = useAxios();
    const [ trades, setTrades] = useState([]);
    const { userId } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchTrades = async () => {
            try {
                const response = await sendRequest('http://localhost:3000/api/trades/', 'GET', {}, { 'Authorization' : `Bearer ${token}`} ) 
                setTrades(response.data)
            } catch (error) {
                console.log(error);
            }
        
        }
        fetchTrades();
    }, [])

    return (
        <div>
            <h1>Trades of {user.name}</h1>
            {trades && trades.map((trade) => (
                <Link key={trade._id} to={`/trade/${trade._id}`}><TradeItem data={trade}/></Link>
            ))}
        </div>
    );
};

export default Trades;
