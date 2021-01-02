import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { usePagination } from '../../Hooks/usePagination';
import Pagination from '../../Services/Pagination';
import { fetchTradesByAccount } from '../../Redux/Actions/tradeActions';
import Loading from '../Shared/Loading';
const API = process.env.REACT_APP_API;

const TradesByAccounts = () => {
  const { user, token } = useSelector(state => state.auth);
  const { isLoading } = useSelector(state => state.control);
  const { accounts } = useSelector(state => state.account);
  const { trades } = useSelector(state => state.trade);
  const [account, setAccount] = useState(null);
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

    if (accounts.length !== 0 && account) {
        setAccount(accounts[0].account_id)
        fetchTrades(token, account);
    }
  }, [accounts, token, account, dispatch]);


  useEffect(() => {
    paginate(trades, 10);
    history.push(`/${user.userId}/trades/page-1`);
  }, [paginate, user, history, trades]);

  const changeAccount = event => {
    setAccount(event.target.value);
  };

  return (
    <React.Fragment>
      { isLoading && <Loading />}
      { !isLoading && accounts ? (
        <select value={accounts[0]} onChange={changeAccount}>
          {accounts.map(account => (
            <option key={account.account_id} value={account.account_id}>
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
