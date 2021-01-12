import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { openModal } from '../../Redux/Actions/modalActions';
import { selectAccount } from '../../Redux/Reducers/account';
import { fetchTrades } from '../../Redux/Actions/tradeActions';
import { fetchStrategyStats } from '../../Redux/Actions/strategyActions';

import TradeList from './TradeList';
import StrategyCardList from './Strategies/StrategyCardList';
import LoadingGroup from '../Shared/LoadingGroup';

const AccountDetails = () => {
  const { accountId } = useParams();
  const { user, token } = useSelector(state => state.auth);
  const { strategyStats } = useSelector(state => state.strategy);
  const { trades } = useSelector(state => state.trade);
  const account = useSelector(state => selectAccount(state, accountId)) || {};
  const { account_name: accountName, balance, description } = account;
  const dispatch = useDispatch();

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

    const fetchTradesByAccount = async (token, account) => {
      try {
        const response = await dispatch(
          fetchTrades({
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
      fetchTradesByAccount(token, account);
    }
  }, [dispatch, account, token]);

    return (
      <LoadingGroup>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className='accounts'>
            <div className='accounts__header'>
              <h1 className='accounts__title'>{accountName}</h1>
              <h2>${balance}</h2>
              <p className='accounts__paragraph'>{description}</p>
              <div className='accounts__button-container'>
                <button
                  className='btn btn--primary'
                  onClick={openStrategyModal}>
                  New Strategy
                </button>
                <button className='btn btn--secondary' onClick={openEditModal}>
                  Edit
                </button>
                <button className='btn btn--secondary' onClick={openDeleteModal}>
                  Delete
                </button>
              </div>
            </div>
            <StrategyCardList currentStrategies={strategyStats} user={user} />
          </div>
          <TradeList trades={trades} />
        </div>
      </LoadingGroup>
    )
};

export default AccountDetails;
