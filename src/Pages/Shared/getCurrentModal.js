import React from 'react';
import EditAccount from '../Accounts/EditAccount';

export const getCurrentModal = (modalName, modalData, handleCloseModal) => {
    switch (modalName) {
        case 'editAccount':
            return <EditAccount data={modalData} closeModal={handleCloseModal} />;
    }
};
