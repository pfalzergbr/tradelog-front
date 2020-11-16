import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { usePagination } from '../Hooks/usePagination'
import Pagination from '../Components/UI/Pagination'

import Loading from '../Components/Loading';
import { AuthContext } from '../Context/MainContext';
import { useAxios } from '../Hooks/useAxios';
import TradeItem from '../Components/TradeItem';

const Trades = (props) => {
    const { user, token } = useContext(AuthContext);
    const { isLoading, sendRequest } = useAxios();
    const [trades, setTrades] = useState([]);
    const {paginatedData, paginate, pageNumbers} = usePagination();

    useEffect(() => {
        const fetchTrades = async () => {
            try {
                const response = await sendRequest(
                    'http://localhost:3000/api/trades/',
                    'GET',
                    {},
                    { Authorization: `Bearer ${token}` },
                );
                setTrades(response.data);
                paginate(response.data, 5)
                
            } catch (error) {
                console.log(error);
            }
        };
        fetchTrades();
    }, []);

    return (
        <React.Fragment>
            {isLoading && <Loading />}
            {!isLoading && (
                <div>
                    <h1>Trades of {user.userName}</h1>
                    {trades &&
                        trades.map((trade) => (
                            <Link key={trade._id} to={`/trade/${trade._id}`}>
                                <TradeItem data={trade} />
                            </Link>
                        ))}
                </div>
            )}

        <Pagination data={paginatedData} pageNumbers={pageNumbers} userId={user.userId} isLoading={isLoading} />
                        


        </React.Fragment>
    );
};

export default Trades;
