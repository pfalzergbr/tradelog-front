import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAccountCurrency } from '../../../Redux/Reducers/account';
import {
  selectStrategyStat,
  selectStrategy,
} from '../../../Redux/Reducers/strategy';
import { loadStrategyStats } from '../../../Services/Requests/strategyRequests';

import Card from '../../Accounts/AccountCard/Card';
import StatContainer from '../../Accounts/AccountCard/StatContainer';
import LoadingGroup from '../../Shared/LoadingGroup';

const StrategyDetailsSmall = () => {
  const dispatch = useDispatch();
  const { strategyId } = useParams();
  const { token } = useSelector(state => state.auth);
  const strategy =
    useSelector(state => selectStrategy(state, strategyId)) || {};
  const strategyStats = useSelector(state =>
    selectStrategyStat(state, strategyId),
  );
  const currency =
    useSelector(state => selectAccountCurrency(state, strategy.account_id)) ||
    '';

  useEffect(() => {
    if (strategy && !strategyStats) {
      loadStrategyStats(token, strategy, dispatch);
    }
  }, [token, strategy, strategyStats, dispatch]);

  return (
    <LoadingGroup>
      {strategy && strategyStats && (
        <Card type='strategy-details'>
          <StatContainer
            text={strategy.strategy_name}
            value={strategyStats.total_pnl}
            type='amount'
            variant='accordion-heading'
            containerClass='item-container'
            currency={currency}
          />

          <StatContainer
            text='Win Percentage'
            value={strategyStats.winPercentage}
            type='percentage'
            variant='accordion-content'
            containerClass='item-container'
          />
          <StatContainer
            text='Average Profit'
            value={strategyStats.average_profit}
            type='amount'
            variant='accordion-content'
            containerClass='item-container'
            currency={currency}
          />
          <StatContainer
            text='Average Loss'
            value={strategyStats.average_loss}
            type='amount'
            variant='accordion-content'
            containerClass='item-container'
            currency={currency}
          />
          <StatContainer
            text='Number of Trades'
            value={strategyStats.num_of_trades}
            type='value'
            variant='accordion-content'
            containerClass='item-container'
          />
          <StatContainer
            text='Wins'
            value={strategyStats.num_of_profit}
            type='value'
            variant='accordion-content'
            containerClass='item-container'
          />
          <StatContainer
            text='Losses'
            value={strategyStats.num_of_loss}
            type='value'
            variant='accordion-content'
            containerClass='item-container'
          />
        </Card>
      )}
    </LoadingGroup>
  );
};

export default StrategyDetailsSmall;
