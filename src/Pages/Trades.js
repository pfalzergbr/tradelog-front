import React, { useEffect, useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { usePagination } from '../Hooks/usePagination';
import Pagination from '../Components/UI/Pagination';

import Loading from '../Components/Loading';
import { AuthContext } from '../Context/MainContext';
import { useAxios } from '../Hooks/useAxios';

const Trades = (props) => {
    const { user, token } = useContext(AuthContext);
    const [ account, setAccount ] = useState( user.accounts[0]._id || null);
    const { isLoading, sendRequest } = useAxios();
    const { paginate, paginatedData, pageNumbers } = usePagination();
    const history = useHistory();

    useEffect(() => {
        const fetchTrades = async () => {
            try {
                const response = await sendRequest(
                    `http://localhost:3000/api/trades/account/${account}`,
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
    }, [account]);

    const changeAccount = (event) => {
        setAccount(event.target.value);
    } 

    return (
        <React.Fragment>
            { account ? <select value={account} onChange={changeAccount}>
                {user.accounts.map(account => <option key={account._id} value={account._id}>{account.accountName}</option>)}
            </select>
            : <div><p>You haven`t got any accounts yet</p><Link to={`/${user.userId}/accounts`}>Create one here</Link></div>}
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
