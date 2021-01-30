import React from 'react';
import { useSelector } from 'react-redux';
import { selectHasAccounts } from '../../Redux/Reducers/account';
import Button from '../Shared/ui/Button';


const AccountsHeader = ({ userName, openNewAccountModal }) => {
  const hasAccounts = useSelector(selectHasAccounts)

  return (
    <div className='page-header'>
      <div className='page-header__title-container'>
        <h3 className='page-header__title'>Welcome, {userName}!</h3>
      </div>
      { hasAccounts ? <p className='page-header__paragraph'>
        Manage your trading accounts to keep track of your gains, losses, and
        over-all trade statistics. Click on cards to see your trades and
        stragegies!
      </p> : <p className='page-header__paragraph'>You have no trading accounts yet. Add a new account to start!</p>}
      <div className='page-header__button-container'>
        <Button buttonStyle='primary' onClick={openNewAccountModal}>
          Create New Account
        </Button>

        <Button buttonStyle='outline'>
          Manage Profile
        </Button>
      </div>
    </div>
  );
};

export default AccountsHeader;
