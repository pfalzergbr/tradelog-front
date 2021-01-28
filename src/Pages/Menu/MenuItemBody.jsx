import React from 'react';
import StatContainer from '../Accounts/AccountCard/StatContainer';

const MenuItemBody = ({strategy, active, strategy_id, currency}) => {

  const {
    winPercentage,
    average_profit,
    average_loss,
    num_of_profit,
    num_of_loss,
    num_of_trades,
  } = strategy;

  return (
    <div
      className={`${
        active === strategy_id
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
        currency={currency}
      />
      <StatContainer
        text='Average Loss'
        value={average_loss}
        type='amount'
        variant='accordion-content'
        containerClass='item-container'
        currency={currency}
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
  );
};

export default MenuItemBody;
