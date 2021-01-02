import React from 'react';
import { Link } from 'react-router-dom';
import AccountCard from './AccountCard';

const AccountCardList = ({ accountStats, user }) => {
  return (
    <ul>
      {accountStats.map(account => (
        <Link
          key={account.account_id}
          to={`/${user.userId}/accounts/${account.account_id}`}>
          <AccountCard accountData={account} />
        </Link>
      ))}
    </ul>
  );
};

export default AccountCardList;