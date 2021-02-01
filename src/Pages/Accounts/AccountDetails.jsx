import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { selectAccount } from '../../Redux/Reducers/account';
import { selectAccountStrategies } from '../../Redux/Reducers/strategy';

import { loadStrategyStats } from '../../Services/Requests/strategyRequests';
import { loadAccountStats } from '../../Services/Requests/accountRequests';
import { fetchTradesByAccount } from '../../Services/Requests/tradeRequests';

import { tradeFilter } from '../../Services/filterService';

import TradeList from '../Trades/Table/TradeList';
import LoadingGroup from '../Shared/LoadingGroup';
import AccordionMenu from '../Menu/AccordionMenu';
import AccountDetailsHeader from './AccountDetailsHeader';
import StrategyDetailsHeader from '../Strategies/StrategyDetailsHeader';
import useSort from '../../Services/hooks/useSort';
import { routeAnimation } from '../../Services/Animations/routeTransition';
import StrategyWidget from '../Strategies/SmallScreen/StrategyWidget';
import AccountWidget from './SmallScreen/AccountWidget';

const AccountDetails = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 800px)' });
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(null);
  const { accountId } = useParams();
  const { token } = useSelector(state => state.auth);
  const { trades } = useSelector(state => state.trade);
  const account = useSelector(state => selectAccount(state, accountId)) || {};
  const accountStrategies =
    useSelector(state => selectAccountStrategies(state, accountId)) || {};

  const sortedStrategies = accountStrategies.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at),
  );
  const filteredTrades = tradeFilter(trades, 'strategy_id', filter);
  const [handleSort, sortedTrades] = useSort(filteredTrades, 'date');

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
      <motion.div className='details' {...routeAnimation}>
        {isBigScreen ? (
          <React.Fragment>
            <AccountDetailsHeader account={account} token={token} />
            <div className='menu-column'>
              <AccordionMenu
                account={account}
                strategies={sortedStrategies}
                setFilter={setFilter}
              />
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <AccountWidget account={account} token={token} />
            <StrategyWidget
              accountStrategies={accountStrategies}
              currentStrategy={filter}
              token={token}
              setFilter={setFilter}
            />
          </React.Fragment>
        )}
        {isBigScreen && (
          <div className='strategy-details'>
            <StrategyDetailsHeader
              accountStrategies={accountStrategies}
              currentStrategy={filter}
              token={token}
            />
          </div>
        )}
        <div className='trades-column'>
          <TradeList trades={sortedTrades} handleSort={handleSort} />
        </div>
      </motion.div>
    </LoadingGroup>
  );
};

export default AccountDetails;
