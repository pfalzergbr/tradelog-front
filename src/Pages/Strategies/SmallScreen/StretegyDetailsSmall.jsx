import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAccountCurrency } from '../../../Redux/Reducers/account';
import { selectStrategyStat, selectStrategy } from '../../../Redux/Reducers/strategy';
import { loadStrategyStats } from '../../../Services/Requests/strategyRequests';

import Card from '../../Accounts/AccountCard/Card';
import StatContainer from '../../Accounts/AccountCard/StatContainer';
import LoadingGroup from '../../Shared/LoadingGroup';

const StrategyDetailsSmall = () => {
  const dispatch = useDispatch();
  const { strategyId } = useParams();
  const { token } = useSelector(state => state.auth);
  const strategy = useSelector(state => selectStrategy(state, strategyId));
  const strategyStats = useSelector(state =>
    selectStrategyStat(state, strategyId),
  );
  const currency = useSelector(state => selectAccountCurrency(state, strategy.account_id)) || ''
  
  useEffect(() => {
    if (strategy && ! strategyStats) {
      loadStrategyStats(token, strategy, dispatch);
    }
  }, [token, strategy, strategyStats, dispatch]);

  return (
    <LoadingGroup>
      {strategy && strategyStats && (
        <Card>
          <StatContainer
            text={strategy.strategy_name}
            value={strategyStats.total_pnl}
            type='amount'
            variant='accordion-heading'
            containerClass='item-container'
            currency={currency}
          />
        </Card>
      )}
    </LoadingGroup>
  );
};

export default StrategyDetailsSmall;
