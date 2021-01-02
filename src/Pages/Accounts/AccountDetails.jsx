import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { openModal } from '../../Redux/Actions/modalActions';
import { selectAccount } from '../../Redux/Reducers/account';

import { fetchTradesByAccount } from '../../Redux/Actions/tradeActions';
// import { selectAccountStrategies } from '../../Redux/Reducers/strategy';
import { fetchStrategyStats } from '../../Redux/Actions/strategyActions';
import TradeList from './TradeList';
import Loading from '../Shared/Loading';
import StrategyCardList from './Strategies/StrategyCardList';

const AccountDetails = () => {
  const { accountId } = useParams();
  //Selectors
  const { user, token } = useSelector(state => state.auth);
  const { isLoading } = useSelector(state => state.control);
  const { strategyStats } = useSelector(state => state.strategy);
  const { trades } = useSelector(state => state.trade);
  //Finds the account for the current page
  const account = useSelector(state => selectAccount(state, accountId)) || {};
  const { account_name: accountName, balance, description } = account;
  // const currentStrategies = useSelector(state =>
  //   selectAccountStrategies(state, accountId),
  // );
  const dispatch = useDispatch();
  //Data to pass in the Delete Modal

  const openEditModal = () => {
    dispatch(openModal('editAccount', { account }));
  };

  const openStrategyModal = () => {
    dispatch(openModal('newStrategy', { accountId }));
  };

  const openDeleteModal = () => {
    dispatch(openModal('deleteAccount', { account, token }));
  };

  useEffect(() => {
    const loadStrategyStats = async (token, account) => {
      try {
        const response = await dispatch(
          fetchStrategyStats({
            url: `${process.env.REACT_APP_API}/api/strategy/stats/${account.account_id}`,
            auth: { Authorization: `Bearer ${token}` },
          }),
        );
        return response;
      } catch (error) {
        console.log(error);
      }
    };

    const fetchTrades = async (token, account) => {
      try {
        const response = await dispatch(
          fetchTradesByAccount({
            url: `${process.env.REACT_APP_API}/api/trades/account/${account.account_id}`,
            auth: { Authorization: `Bearer ${token}` },
          }),
        );
        return response;
      } catch (error) {
        console.log(error);
      }
    };

    if (account.account_id) {
      loadStrategyStats(token, account);
      const trades = fetchTrades(token, account);
    }
  }, [dispatch, account, token]);

  return (
    <React.Fragment>
      {isLoading && <Loading />}
      {!isLoading && (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h1>{accountName}</h1>
            <h2>${balance}</h2>
            <p>{description}</p>
            <StrategyCardList currentStrategies={strategyStats} user={user} />
            <div>
              <button onClick={openStrategyModal}>New Strategy</button>
              <button onClick={openEditModal}>Edit</button>
              <button onClick={openDeleteModal}>Delete</button>
            </div>
          </div>
          <TradeList trades={trades} />
        </div>
      )}
    </React.Fragment>
  );
};

export default AccountDetails;
