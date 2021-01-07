import React from 'react';
import {
  calcWinPercentage,
  calcRelativeGain,
} from '../../Services/statService';
import { useSelector } from 'react-redux';
import { selectAccountStats } from '../../Redux/Reducers/account';

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
        <React.Fragment>
          <div className='card__stats'>
            <div>
              <div className='stat-container'>
                <h4>Profit / Loss:</h4>
                <span
                  className={
                    currentAccountStats.total_pnl >= 0 ? 'green' : 'red'
                  }>
                  {currentAccountStats.total_pnl || 0}$
                </span>
              </div>
            </div>

            <div className='stat-container'>
              <h4>Win Percentage:</h4>
              <span>{winPercentage}%</span>
            </div>
            <div className='stat-container'>
              <h4>Number of Trades:</h4>
              <span> {currentAccountStats.num_of_trades}</span>
            </div>
          </div>
        </React.Fragment>
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
