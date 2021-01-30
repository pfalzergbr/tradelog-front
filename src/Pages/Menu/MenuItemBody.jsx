import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { calcWinPercentage } from '../../Services/statService';
import StatContainer from '../Accounts/AccountCard/StatContainer';
import { bodyAnimation } from '../../Services/Animations/accordionTransition';

const MenuItemBody = ({ strategy, active, item, currency }) => {
  const itemId = item.strategy_id || item.account_id;
  const isOpen = active === itemId;

  const {
    // winPercentage,
    average_profit,
    average_loss,
    num_of_profit,
    num_of_loss,
    num_of_trades,
  } = strategy;

  const winPercentage = calcWinPercentage(num_of_profit, num_of_loss) || 0;

  return (
    <React.Fragment>
    <AnimatePresence exitBeforeEnter>
      {isOpen && (
        <motion.div className='accordion-content' {...bodyAnimation} key={itemId}>

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
        </motion.div>
      )}
      </AnimatePresence>
    </React.Fragment>
  );
};

export default MenuItemBody;
