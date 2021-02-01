import React from 'react';
import { useSelector } from 'react-redux';
import { selectStrategyStat } from '../../../Redux/Reducers/strategy';

import Button from '../../Shared/ui/Button';

const StrategyWidget = ({accountStrategies, currentStrategy, token}) => {
  const strategy = accountStrategies.find(strategy => strategy.strategy_id === currentStrategy) || {}
  const strategyStats =
    useSelector(state => selectStrategyStat(state, currentStrategy)) || {};



  return (
    <div className='widget widget--strategy'>
      <div className='widget__container'>
        <h4 className='widget__title'>{strategy.strategy_name || 'All Trades'}</h4>
        <p className='widget__value'>{strategyStats.total_pnl || ''}</p>
      </div>
      <div className="widget__button-container">
        <Button buttonStyle='outline'>Details</Button>
      </div>
    </div>
  );
};

export default StrategyWidget;
