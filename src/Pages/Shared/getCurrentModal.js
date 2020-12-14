import React from 'react';
import EditAccount from '../Accounts/EditAccount';
import DeleteAccount from '../Accounts/DeleteAccount';
import NewTrade from '../Trades/NewTrade';

export const getCurrentModal = (modalName, modalData, handleCloseModal) => {
    switch (modalName) {
        case 'editAccount':
            return (
                <EditAccount data={modalData} closeModal={handleCloseModal} />
            );
        case 'deleteAccount':
            return (
                <DeleteAccount data={modalData} closeModal={handleCloseModal} />
            );
        case 'newTrade':
            return (
                <NewTrade closeModal={handleCloseModal} />
            )
        default:
            return <div></div>;
    }
};
