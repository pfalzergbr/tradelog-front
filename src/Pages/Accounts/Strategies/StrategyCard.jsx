import React from 'react';

import { calcWinPercentage } from '../../../Services/statService';
const StrategyCard = props => {
  const {
    strategy_name,
    total_pnl,
    // average_profit,
    // average_loss,
    num_of_profit,
    num_of_loss,
  } = props.strategyData;

  const winPercentage = calcWinPercentage(num_of_profit, num_of_loss);

  return (
    <div className='card'>
      <div className='card__header'>
        <h2>{strategy_name}</h2>
        <span className={`card__balance ${total_pnl > 0 ? 'green' : 'red'} `}>
          {total_pnl}
        </span>
      </div>
      <div className='card__stats'>
        <div className='stat-container'>
          <h3>P&L:</h3> <span>{total_pnl}</span>
        </div>
        <div className='stat-container'>
          <h3>Win%:</h3> <span>{winPercentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default StrategyCard;
