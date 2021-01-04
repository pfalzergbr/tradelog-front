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
    <div>
      <h2>{strategy_name}</h2>
      <h3>P&L:</h3> <span>{total_pnl}</span>
      <h3>Win%:</h3> <span>{winPercentage}%</span>
    </div>
  );
};

export default StrategyCard;
