import React from 'react';
import StrategyCard from './StrategyCard';
import { Link } from 'react-router-dom';

const StrategyCardList = ({ currentStrategies, user }) => {
  return (
    <ul className="card-container">
      {currentStrategies
        ? currentStrategies.map(strategy => (
            <Link
              key={strategy.strategy_id}
              to={`/${user.userId}/strategies/${strategy.strategy_id}`}>
              <StrategyCard strategyData={strategy} />
            </Link>
          ))
        : 'Cannot find any strategies for this account'}
    </ul>
  );
};

export default StrategyCardList;
