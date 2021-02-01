import React from 'react';
import { openModal } from '../../../Redux/Actions/modalActions';
import { useDispatch } from 'react-redux';

import Button from '../../Shared/ui/Button';

const AccountWidget = ({ account, token }) => {
  const dispatch = useDispatch();

  const openEditModal = () => {
    dispatch(openModal('editAccount', { account }));
  };

  const openStrategyModal = () => {
    dispatch(openModal('newStrategy', { accountId: account.account_id }));
  };

  const openDeleteModal = () => {
    dispatch(openModal('deleteAccount', { account, token }));
  };

  return (
    <div className='widget widget--account'>
      <div className='widget__container'>
        <h4 className='widget__title'>Account - {account.account_name}</h4>
        <p className='widget__value'>${account.balance}</p>
      </div>
      <div className='widget__details-container'>
        <p className='widget__details'>
          {account.details || 'No account description added yet.'}{' '}
        </p>
      </div>
      <div className='widget__button-container'>
        <Button onClick={openEditModal}>Edit</Button>
        <Button onClick={openDeleteModal}>Delete</Button>
        <Button buttonStyle='outline'>Details</Button>
        <Button buttonStyle='outline' onClick={openStrategyModal}>
          New Strategy
        </Button>
      </div>
    </div>
  );
};

export default AccountWidget;
