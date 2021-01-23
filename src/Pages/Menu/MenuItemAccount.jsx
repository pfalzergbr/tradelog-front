import React from 'react';
import { useSelector } from 'react-redux';
import { selectAccountStats } from '../../Redux/Reducers/account';
import { calcWinPercentage } from '../../Services/statService';
import StatContainer from '../Accounts/AccountCard/StatContainer';

// TODO - Build the whole menu for the actual app

const MenuItemAccount = ({ item, active, setActive, setFilter }) => {
  const accountStats =
    useSelector(state => selectAccountStats(state, item.account_id)) || {};
  const { account_name, balance, account_id } = item;
  const {
    total_pnl,
    average_profit,
    average_loss,
    num_of_profit,
    num_of_loss,
    num_of_trades,
  } = accountStats;

  const winPercentage = calcWinPercentage(num_of_profit, num_of_loss) || 0;

  const activate = () => {
    setActive(account_id);
    setFilter(null);
  };

  return (
    <div className='menu-item'>
      <div
        className={`accordion-heading ${
          active === account_id
            ? 'accordion-heading--active'
            : 'accordion-heading-inactive'
        }`}
        onClick={activate}>
        <StatContainer
          text={`Account - ${account_name}`}
          value={total_pnl}
          type='amount'
          variant='accordion-heading'
          containerClass='item-container'
        />
      </div>

      <div
        className={`${
          active === account_id
            ? 'accordion-content--show'
            : 'accordion-content--hide'
        } accordion-content`}>
        <StatContainer
          text='Total Profit'
          value={total_pnl}
          type='amount'
          variant='accordion-content'
          containerClass='item-container'
        />
        <StatContainer
          text='Balance'
          value={balance}
          type='amount'
          variant='accordion-content'
          containerClass='item-container'
        />
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
        {/*<StatContainer
          text='Average Risk-Reward'
          value={`${riskReward(average_profit, average_loss)}`}
          type='value'
          variant='accordion-content'
          containerClass='item-container'
        />*/}
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
          text='Number of Wins'
          value={num_of_profit}
          type='value'
          variant='accordion-content'
          containerClass='item-container'
        />
        <StatContainer
          text='Number of Losses'
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

export default MenuItemAccount;
