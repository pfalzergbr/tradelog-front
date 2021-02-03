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
import Button from '../../Shared/ui/Button';

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
    'usd';

  useEffect(() => {
    if (strategy && !strategyStats) {
      loadStrategyStats(token, strategy, dispatch);
    }
  }, [token, strategy, strategyStats, dispatch]);

  return (
    <LoadingGroup>
      {strategy && strategyStats && (
        <div className='strategy-details-small'>
          <div className='strategy-details-small__title-container'>
            <StatContainer
              text={strategy.strategy_name}
              value={strategyStats.total_pnl}
              type='amount'
              currency={currency}
              variant='strategy-details-small'
              containerClass='item-container'
            />
          </div>
          <div className='strategy-details-small__stats-container'>
            <StatContainer
              text='Win Percentage'
              value={strategyStats.winPercentage}
              type='percentage'
              containerClass='item-container'
            />
            <StatContainer
              text='Average Profit'
              value={strategyStats.average_profit}
              type='amount'
              containerClass='item-container'
              currency={currency}
            />
            <StatContainer
              text='Average Loss'
              value={strategyStats.average_loss}
              type='amount'
              containerClass='item-container'
              currency={currency}
            />
            <StatContainer
              text='Number of Trades'
              value={strategyStats.num_of_trades}
              type='value'
              containerClass='item-container'
            />
            <StatContainer
              text='Wins'
              value={strategyStats.num_of_profit}
              type='value'
              containerClass='item-container'
            />
            <StatContainer
              text='Losses'
              value={strategyStats.num_of_loss}
              type='value'
              containerClass='item-container'
            />
          </div>
          <div className='strategy-details-small__description-container'>
            <h4 className='strategy-details-small__description-title'>
              Details
            </h4>
            <p className='strategy-details-small__description'>
              {strategy.description}
            </p>
          </div>
          <div className='strategy-details-small__button-container'>
            <Button buttonStyle='outline'>Back</Button>
            <Button>Delete</Button>
            <Button>Edit</Button>
          </div>
        </div>
      )}
    </LoadingGroup>
  );
};

export default StrategyDetailsSmall;
