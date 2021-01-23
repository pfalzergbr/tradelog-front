import React from 'react';
import StatContainer from '../Accounts/AccountCard/StatContainer';

import { useSelector } from 'react-redux';
import { selectStrategyStat } from '../../Redux/Reducers/strategy';

// TODO - Build the whole menu for the actual app

const MenuItem = ({ item, active, setActive, setFilter }) => {
  const strategyStats =
    useSelector(state => selectStrategyStat(state, item.strategy_id)) || {};
  const {
    total_pnl,
    winPercentage,
    average_profit,
    average_loss,
    num_of_profit,
    num_of_loss,
    num_of_trades,
  } = strategyStats;

  const activate = () => {
    setActive(item.strategy_id);
    setFilter(item.strategy_id)
  };

  return (
    <div className='menu-item'>
      <div
        className={`accordion-heading ${
          active === item.strategy_id
            ? 'accordion-heading--active'
            : 'accordion-heading-inactive'
        }`}
        onClick={activate}>
        <StatContainer
          text={item.strategy_name}
          value={total_pnl}
          type='amount'
          variant='accordion-heading'
          containerClass='item-container'
        />
      </div>

      <div
        className={`${
          active === item.strategy_id
            ? 'accordion-content--show'
            : 'accordion-content--hide'
        } accordion-content`}>
        <StatContainer
          text='Win Percentage'
          value={winPercentage}
          type='percentage'
          variant='accordion-content'
          containerClass='item-container'
        />
        <StatContainer
          text='Average Profit'
          value={average_profit}
          type='amount'
          variant='accordion-content'
          containerClass='item-container'
        />
        <StatContainer
          text='Average Loss'
          value={average_loss}
          type='amount'
          variant='accordion-content'
          containerClass='item-container'
        />
        <StatContainer
          text='Number of Trades'
          value={num_of_trades}
          type='value'
          variant='accordion-content'
          containerClass='item-container'
        />
        <StatContainer
          text='Wins'
          value={num_of_profit}
          type='value'
          variant='accordion-content'
          containerClass='item-container'
        />
        <StatContainer
          text='Losses'
          value={num_of_loss}
          type='value'
          variant='accordion-content'
          containerClass='item-container'
        />
        <div className='item-container'>
          <p className='accordion__link'>Strategy Details</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
