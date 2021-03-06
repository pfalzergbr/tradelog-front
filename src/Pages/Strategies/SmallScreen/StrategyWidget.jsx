import React from 'react';
import { useSelector } from 'react-redux';
import { selectStrategyStat } from '../../../Redux/Reducers/strategy';
import { useHistory } from 'react-router-dom';
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
  const { currency, balance, opening_balance, user_id } = account;
  const history = useHistory()
  const strategyStats =
    useSelector(state => selectStrategyStat(state, currentStrategy)) || {};
  const value = (strategyStats.total_pnl || balance - opening_balance).toFixed(2);
  const valueColor = value > 0 ? 'green' : 'red';

  const handleDetailsClick = () => {
    history.push(`/${user_id}/strategies/${currentStrategy}`)
  }

  return (
    <div className='widget widget--strategy'>
      <div className='widget__container widget__container--strategy'>
        <StrategySelectMobile
          currentStrategy={currentStrategy}
          accountStrategies={accountStrategies}
          setFilter={setFilter}
        />
        {currentStrategy && <Button disabled={!currentStrategy} onClick={handleDetailsClick}>Details</Button>}
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
