import React, { useEffect, useState, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { usePagination } from '../../Hooks/usePagination';
import Pagination from '../../Services/Pagination';
import { fetchTradesByAccount } from '../../Redux/Actions/tradeActions';
import Loading from '../Shared/Loading';
const API = process.env.REACT_APP_API;

const TradesByAccounts = (props) => {
    const { user, token } = useSelector((state) => state.auth);
    const { isLoading } = useSelector((state) => state.control);
    const { accounts } = useSelector((state) => state.account);
    const { trades } = useSelector((state) => state.trade);
    const [account, setAccount] = useState(accounts[0].account_id || null);
    const { paginate, paginatedData, pageNumbers } = usePagination();
    const dispatch = useDispatch();
    const history = useHistory();


    useEffect(() => {
        const fetchTrades = async (token, account) => {
            try {
                dispatch(
                    fetchTradesByAccount({
                        url: `${API}/api/trades/account/${account}`,
                        auth: { Authorization: `Bearer ${token}` },
                    }),
                );
            } catch (error) {
                console.log(error);
            }
        };
        fetchTrades(token, account);
    }, [token, account, dispatch]);

    useEffect(() => {
        paginate(trades, 10);
        history.push(`/${user.userId}/trades/page-1`)
    }, [ user, history, trades ]);

    const changeAccount = (event) => {
        setAccount(event.target.value);
    };

    return (
        <React.Fragment>
            {account ? (
                <select value={account} onChange={changeAccount}>
                    {accounts.map((account) => (
                        <option
                            key={account.account_id}
                            value={account.account_id}>
                            {account.account_name}
                        </option>
                    ))}
                </select>
            ) : (
                <div>
                    <p>You haven`t got any accounts yet</p>
                    <Link to={`/${user.userId}/accounts`}>Create one here</Link>
                </div>
            )}
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

export default TradesByAccounts;
