import React from 'react';
import { calcWinPercentage } from '../../Services/statService';
import { useSelector } from 'react-redux';
import { selectAccountStats } from '../../Redux/Reducers/account';

const AccountCard = props => {
  const { account_id } = props.accountData;
  console.log(account_id);
  const currentAccountStats = useSelector(state =>
    selectAccountStats(state, account_id),
  );
  console.log(currentAccountStats);

  const {
    account_name,
    balance,
    total_pnl,
    // average_profit,
    // average_loss,
    num_of_profit,
    num_of_loss,
  } = props.accountData;

  const winPercentage = calcWinPercentage(num_of_profit, num_of_loss);

  return (
    <div className='account-card'>
      <div className='account-card__header'>
        <h2 className='card-title'>{account_name}</h2>
      </div>
      {currentAccountStats ? (
        <div>
          <h3>Balance:</h3> <span>{balance}</span>
          <h3>P&L:</h3> <span>{total_pnl}</span>
          <h3>Win%:</h3> <span>{winPercentage}%</span>
        </div>
      ) : (
        <div>
          <p>No trades on this account yet. </p>
        </div>
      )}
    </div>
  );
};

export default AccountCard;
