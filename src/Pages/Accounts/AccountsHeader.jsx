import React from 'react';
import Button from '../Shared/ui/Button';

const AccountsHeader = ({ userName, openNewAccountModal }) => {
  return (
    <div className='accounts__header'>
      <h2 className='accounts__title'>Welcome, {userName}!</h2>
      <p className='accounts__paragraph'>
        Manage your trading accounts to keep track of your gains, losses, and
        over-all trade statistics. Click on cards to see your trades and
        stragegies!
      </p>
      <div className='accounts__button-container'>
        <Button type='primary' onClick={openNewAccountModal}>
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default AccountsHeader;
