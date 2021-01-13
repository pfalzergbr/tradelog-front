import React from 'react';
import {
  calcWinPercentage,
  calcRelativeGain,
} from '../../../Services/statService';
import { useSelector } from 'react-redux';

import { selectAccountStats } from '../../../Redux/Reducers/account';

import StatContainer from './CardStatContainer';
import Card from './Card';
import CardHeader from './HeaderContainer';

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
    <Card>
      <CardHeader accountName={account_name} relativeGain={relativeGain} />
      {currentAccountStats ? (
        <div className='card-body'>
        <StatContainer
          text='Total Profit'
          value={currentAccountStats.total_pnl}
          type='amount'
        />
          <StatContainer text='Balance' value={balance} type='amount' />
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
            type='amount'
          />
          <StatContainer
            text='Average Loss'
            value={currentAccountStats.average_loss}
            type='amount'
          />
          <StatContainer
            text='Number of Strategies'
            value={'Todo!'}
            type='number'
          />
          <div className="card-footer">
            <p className="card-footer__paragraph">Click for trades and Strategies</p>
          </div>
        </div>
      ) : (
        <div className='account-stats'>
          <div>
            <h4>No trades on this account yet. </h4>
            <p>Click here to add Strategies and Trades!</p>
          </div>
        </div>
      )}
    </Card>
  );
};

export default AccountCard;
