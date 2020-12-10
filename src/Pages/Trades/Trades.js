import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { usePagination } from '../../Hooks/usePagination';
import Pagination from '../../Services/Pagination';

import Loading from '../Shared/Loading';
import { useSelector } from 'react-redux';
import { useRequest } from '../../Hooks/useRequest';
const API = process.env.REACT_APP_API;

const Trades = (props) => {
    const { user, token } = useSelector(state => state.authReducer);
    const { isLoading } = useSelector(state => state.requestReducer);
    const { accounts } = useSelector(state => state.accountReducer);
    const [ account, setAccount ] = useState( accounts[0].account_id || null);
    // const { isLoading, sendRequest } = useRequest();
    const { paginate, paginatedData, pageNumbers } = usePagination();
    const history = useHistory();

    console.log(account)
    // useEffect(() => {
    //     const fetchTrades = async () => {
    //         try {
    //             const response = await sendRequest(
    //                 `${API}/api/trades/account/${account}`,
    //                 'GET',
    //                 {},
    //                 { Authorization: `Bearer ${token}` },
    //             );

    //             paginate(response.data, 5);
    //             history.push(`/${user.userId}/trades/page-1`);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchTrades();
    // }, [account, history, paginate, sendRequest, token, user.userId]);

    const changeAccount = (event) => {
        setAccount(event.target.value);
    } 

    return (
        <React.Fragment>
            { account ? <select value={account} onChange={changeAccount}>
                {accounts.map(account => <option key={account.account_id} value={account.account_id}>{account.account_name}</option>)}
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
