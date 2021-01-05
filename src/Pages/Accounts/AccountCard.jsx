import React from 'react';
import { calcWinPercentage } from '../../Services/statService';
import { useSelector } from 'react-redux';
import { selectAccountStats } from '../../Redux/Reducers/account';

const AccountCard = props => {
  const { account_id } = props.accountData;
  const currentAccountStats = useSelector(state =>
    selectAccountStats(state, account_id),
  );

  const { account_name, balance } = props.accountData;

  // const winPercentage = ;

  return (
    <div className='account-card'>
      <div className='account-card__header'>
        <h2 className='card-title'>{account_name}</h2>
      </div>
      {currentAccountStats ? (
        <div>
          <h3>Balance:</h3> <span>{balance}</span>
          <h3>P&L:</h3> <span>{currentAccountStats.total_pnl}</span>
          <h3>Win%:</h3> <span>{calcWinPercentage(currentAccountStats.num_of_profit, currentAccountStats.num_of_loss)}%</span>
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
