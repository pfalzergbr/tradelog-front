import React from 'react';
import { Link } from 'react-router-dom';
import AccountCard from './AccountCard/AccountCard';

// Add check if cards exist. 

const AccountCardList = ({ accounts, user }) => {
  return (
    <ul className="card-list">
      {accounts.map(account => (
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
