import React from 'react';

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
        <button className='btn btn--primary' onClick={openNewAccountModal}>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default AccountsHeader;
