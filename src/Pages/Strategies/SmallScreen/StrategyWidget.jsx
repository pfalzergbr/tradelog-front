import React from 'react';
import { useSelector } from 'react-redux';
import { selectStrategyStat } from '../../../Redux/Reducers/strategy';

import Button from '../../Shared/ui/Button';
import StrategySelectMobile from './StrategySelectMobile';
import { currencyMap } from '../../../Services/currencyMap';

const StrategyWidget = ({
  accountStrategies,
  currentStrategy,
  token,
  setFilter,
  account,
}) => {
  const { currency, balance, opening_balance } = account;

  const strategyStats =
    useSelector(state => selectStrategyStat(state, currentStrategy)) || {};
  const value = (strategyStats.total_pnl || balance - opening_balance).toFixed(2);
  const valueColor = value > 0 ? 'green' : 'red';

  return (
    <div className='widget widget--strategy'>
      <div className='widget__container widget__container--strategy'>
        <StrategySelectMobile
          currentStrategy={currentStrategy}
          accountStrategies={accountStrategies}
          setFilter={setFilter}
        />
        <Button>Details</Button>
        <p className={`widget__value`}>
          <span className={valueColor}>
            {currencyMap[currency]}
            {value}
          </span>
        </p>
      </div>
    </div>
  );
};

export default StrategyWidget;
