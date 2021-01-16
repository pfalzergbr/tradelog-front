import React from 'react';

import { useDispatch } from 'react-redux';
import { openModal } from '../../Redux/Actions/modalActions';

const AccountDetailsHeader = ({account, token}) => {
  const { account_name: accountName, balance, description, account_id: accountId } = account
  const dispatch = useDispatch();

  const openEditModal = () => {
    dispatch(openModal('editAccount', { account }));
  };

  const openStrategyModal = () => {
    dispatch(openModal('newStrategy', { accountId }));
  };

  const openDeleteModal = () => {
    dispatch(openModal('deleteAccount', { account, token }));
  };

  return (
    <div className='page__header'>
      <h1 className='page-header__title'>{accountName}</h1>
      <h2>${balance}</h2>
      <p className='page-header__paragraph'>{description}</p>
      <div className='page-header__button-container'>
        <button className='btn btn--primary' onClick={openStrategyModal}>
          New Strategy
        </button>
        <button className='btn btn--secondary' onClick={openEditModal}>
          Edit
        </button>
        <button className='btn btn--secondary' onClick={openDeleteModal}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AccountDetailsHeader;
