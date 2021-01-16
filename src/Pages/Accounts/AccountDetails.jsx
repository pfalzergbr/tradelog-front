import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectAccount,
  selectAccountStats,
} from '../../Redux/Reducers/account';
import { selectAccountStrategies } from '../../Redux/Reducers/strategy';

import { loadStrategyStats } from '../../Services/Requests/strategyRequests';
import { loadAccountStats } from '../../Services/Requests/accountRequests';
import { fetchTradesByAccount } from '../../Services/Requests/tradeRequests';

import { tradeFilter } from '../../Services/filterService';

import TradeList from '../Trades/Table/TradeList';
import LoadingGroup from '../Shared/LoadingGroup';
import AccordionMenu from './Strategies/Menu/AccordionMenu';
import AccountDetailsHeader from './AccountDetailsHeader';

const AccountDetails = () => {
  const { accountId } = useParams();
  const { token } = useSelector(state => state.auth);
  const { trades } = useSelector(state => state.trade);
  const account = useSelector(state => selectAccount(state, accountId)) || {};
  const accountStats =
    useSelector(state => selectAccountStats(state, accountId)) || {};
  const dispatch = useDispatch();
  const accountStrategies =
    useSelector(state => selectAccountStrategies(state, accountId)) || {};
  const [filter, setFilter] = useState(null);
  const filteredTrades = tradeFilter(trades, 'strategy_id', filter);

  useEffect(() => {
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
      <div className="accounts">
        <AccountDetailsHeader account={account} token={token} />
        <div className='account-details'>
          <div className='strategies-column'>
            <AccordionMenu
              account={accountStats}
              strategies={accountStrategies}
              setFilter={setFilter}
            />
          </div>
          <div className='trades-column'>
            <TradeList trades={filteredTrades} />
          </div>
        </div>
      </div>
    </LoadingGroup>
  );
};

export default AccountDetails;
