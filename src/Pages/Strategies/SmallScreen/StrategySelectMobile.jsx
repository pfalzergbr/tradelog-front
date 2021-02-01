import React from 'react';

const StrategySelectMobile = ({
  accountStrategies,
  currentStrategy,
  setFilter,
}) => {
  const strategyOptions = [ {strategy_name: 'All trades', strategy_id: ''}, ...accountStrategies]

  const onSelect = e => {
    setFilter(e.target.value);
  };

  return (
    <div className='form-control--row'>
      <label htmlFor='strategySelect'>Strategy: </label>
      <select
        className='form__input'
        name='strategySelect'
        onChange={onSelect}
        value={currentStrategy || strategyOptions[0]}>
        {strategyOptions.map(strategy => (
          <option key={strategy.strategy_id} value={strategy.strategy_id}>
            {strategy.strategy_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StrategySelectMobile;
