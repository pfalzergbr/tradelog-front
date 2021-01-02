import React from 'react';
import { Link } from 'react-router-dom';

const StrategyCardList = ({ currentStrategies, user }) => {
  return (
    <ul>
      {currentStrategies
        ? currentStrategies.map(strategy => (
            <Link
              key={strategy.strategy_id}
              to={`/${user.userId}/strategies/${strategy.strategy_id}`}>
              <li>{strategy.strategy_name}</li>
            </Link>
          ))
        : 'Cannot find any strategies for this account'}
    </ul>
  );
};

export default StrategyCardList;