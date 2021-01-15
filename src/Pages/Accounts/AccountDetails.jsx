import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectAccount,
  selectAccountStats,
} from '../../Redux/Reducers/account';

import { loadStrategyStats } from '../../Services/Requests/strategyRequests';
import { loadAccountStats } from '../../Services/Requests/accountRequests';
import { fetchTradesByAccount } from '../../Services/Requests/tradeRequests';

import TradeList from '../Trades/Table/TradeList';
import LoadingGroup from '../Shared/LoadingGroup';
import AccordionMenu from './Strategies/Menu/AccordionMenu';
import AccountDetailsHeader from './AccountDetailsHeader';

const AccountDetails = () => {
  const { accountId } = useParams();
  const { token } = useSelector(state => state.auth);
  const { strategies } = useSelector(state => state.strategy);
  const { trades } = useSelector(state => state.trade);
  const account = useSelector(state => selectAccount(state, accountId)) || {};
  const accountStats =
    useSelector(state => selectAccountStats(state, accountId)) || {};
  const dispatch = useDispatch();

  useEffect(() => {
    //Add selectors to check if it is already fetched.
    loadAccountStats(token, dispatch);
  }, [dispatch, token]);

  useEffect(() => {
    if (account.account_id) {
      loadStrategyStats(token, account, dispatch);
    }
  }, [dispatch, account, token]);

  useEffect(() => {
    if (account.account_id) {
      fetchTradesByAccount(token, account, dispatch);
    }
  }, [dispatch, account, token]);

  return (
    <LoadingGroup>
      <div>
        <AccountDetailsHeader account={account} token={token}/>
        <div className='account-details'>
          <div className='strategies-column'>
            <AccordionMenu account={accountStats} strategies={strategies} />
          </div>
          <div className='trades-column'>
            <TradeList trades={trades} />
          </div>
        </div>
      </div>
    </LoadingGroup>
  );
};

export default AccountDetails;
