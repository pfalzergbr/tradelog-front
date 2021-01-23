import React from 'react';
import EditAccount from '../Accounts/EditAccount';
import DeleteAccount from '../Accounts/DeleteAccount';
import DeleteStrategy from '../Strategies/DeleteStrategy';
import DeleteTrade from '../Trades/DeleteTrade';
import NewAccount from '../Accounts/NewAccount';
import NewStrategy from '../Strategies/NewStrategy';
import EditStrategy from '../Strategies/EditStrategy';
import NewTrade from '../Trades/NewTrade';

export const getCurrentModal = (modalName, modalData, handleCloseModal) => {
  switch (modalName) {
    case 'newAccount':
      return <NewAccount data={modalData} closeModal={handleCloseModal} />;
    case 'editAccount':
      return <EditAccount data={modalData} closeModal={handleCloseModal} />;
    case 'deleteAccount':
      return <DeleteAccount data={modalData} closeModal={handleCloseModal} />;
    case 'deleteStrategy':
      return <DeleteStrategy data={modalData} closeModal={handleCloseModal} />;
    case 'deleteTrade':
      return <DeleteTrade data={modalData} closeModal={handleCloseModal} />;
    case 'newTrade':
      return <NewTrade closeModal={handleCloseModal} />;
    case 'newStrategy':
      return <NewStrategy data={modalData} closeModal={handleCloseModal} />;
    case 'editStrategy':
      return <EditStrategy data={modalData} closeModal={handleCloseModal} />;
    default:
      return <div></div>;
  }
};
