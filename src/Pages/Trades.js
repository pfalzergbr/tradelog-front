import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { usePagination } from '../Hooks/usePagination';
import Pagination from '../Components/UI/Pagination';

import Loading from '../Components/Loading';
import { AuthContext } from '../Context/MainContext';
import { useAxios } from '../Hooks/useAxios';

const Trades = (props) => {
    const { accounts, setAccounts } = useState();
    const { user, token } = useContext(AuthContext);
    const { isLoading, sendRequest } = useAxios();
    const { paginate, paginatedData, pageNumbers } = usePagination();
    const history = useHistory();

    useEffect(() => {
        const fetchTrades = async () => {
            try {
                const response = await sendRequest(
                    'http://localhost:3000/api/trades/',
                    'GET',
                    {},
                    { Authorization: `Bearer ${token}` },
                );

                paginate(response.data, 5);
                history.push(`/${user.userId}/trades/page-1`);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTrades();
    }, []);

    return (
        <React.Fragment>
            <select>
                
            </select>
            {isLoading && <Loading />}
            {!isLoading && (
                <div>
                    <Pagination
                        data={paginatedData}
                        pageNumbers={pageNumbers}
                        userId={user.userId}
                        itemType={'trade'}
                    />
                </div>
            )}
        </React.Fragment>
    );
};

export default Trades;
