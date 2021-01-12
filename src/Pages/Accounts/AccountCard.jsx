import React from 'react';
import {
  calcWinPercentage,
  calcRelativeGain,
} from '../../Services/statService';
import { useSelector } from 'react-redux';
import { selectAccountStats } from '../../Redux/Reducers/account';
import StatContainer from './StatContainer';

const AccountCard = props => {
  const { account_id } = props.accountData;
  const currentAccountStats = useSelector(
    state => selectAccountStats(state, account_id) || {},
  );
  const { account_name, balance } = props.accountData;

  const relativeGain =
    calcRelativeGain(
      currentAccountStats.opening_balance,
      currentAccountStats.balance,
    ) || 0;

  const winPercentage =
    calcWinPercentage(
      currentAccountStats.num_of_profit,
      currentAccountStats.num_of_loss,
    ) || 0;

  return (
    <div className='card'>
      <div className='card__header'>
        <h2 className='card-title'>{account_name}</h2>
        <div>
          <span className={`card__balance`}>{balance}$</span>
          <span
            className={`card__relative-gain ${
              relativeGain >= 0 ? 'green' : 'red'
            }`}>
            {relativeGain}%
          </span>
        </div>
      </div>
      {currentAccountStats ? (
          <div className='card__stats'>
            <StatContainer
              text='Profit / Loss'
              value={currentAccountStats.total_pnl}
              type='amount'
            />
            <StatContainer
              text='Win Percentage'
              value={winPercentage}
              type='percentage'
            />
            <StatContainer
              text='Number of Trades'
              value={currentAccountStats.num_of_trades}
            />
            <StatContainer
              text='Average Profit'
              value={currentAccountStats.average_profit}
              type="amount"
            />
            <StatContainer
              text='Average Loss'
              value={currentAccountStats.average_loss}
              type="amount"
            />
          </div>
      ) : (
        <div className='account-stats'>
          <div>
            <h4>No trades on this account yet. </h4>
            <p>Click here to add Strategies and Trades!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountCard;
