import React from 'react';
import Button from '../Shared/ui/Button';

const AccountsHeader = ({ userName, openNewAccountModal }) => {
  return (
    <div className='page-header'>
      <div className='page-header__title-container'>
        <h3 className='page-header__title'>Welcome, {userName}!</h3>
      </div>
      <p className='page-header__paragraph'>
        Manage your trading accounts to keep track of your gains, losses, and
        over-all trade statistics. Click on cards to see your trades and
        stragegies!
      </p>
      <div className='page-header__button-container'>
        <Button buttonStyle='primary' onClick={openNewAccountModal}>
          Create New Account
        </Button>

        <Button buttonStyle='outline' onClick={openNewAccountModal}>
          Manage Profile
        </Button>
      </div>
    </div>
  );
};

export default AccountsHeader;
