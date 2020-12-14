import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { closeModal } from '../../Redux/Actions/modalActions';
import { getCurrentModal } from './getCurrentModal'

const ModalController = () => {
    const dispatch = useDispatch();
    const { isOpen, modalName, modalData } = useSelector(
        (state) => state.modal,
    );

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    const currentModal = getCurrentModal(modalName, modalData, handleCloseModal);

    return (
        <Modal
            appElement={document.getElementById('app')}
            isOpen={isOpen}
            onRequestClose={handleCloseModal}>
            {currentModal}
        </Modal>
    );
};

export default ModalController;
