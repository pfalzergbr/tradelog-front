import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { closeModal } from '../../Redux/Actions/modalActions';
import { getCurrentModal } from './getCurrentModal';

const ModalController = () => {
  const dispatch = useDispatch();
  const { isOpen, modalName, modalData } = useSelector(state => state.modal);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const currentModal = getCurrentModal(modalName, modalData, handleCloseModal);
  const modalStyles = {
    content: {
      boxSizing: 'border-box',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      padding: '0',
      overflow: 'hidden',
      backgroundColor: 'rgba(0, 0, 0, 0.85)'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      height: '100vh',
      width: '100vw'
    }
  };
  return (
    <Modal
      style={modalStyles}
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={handleCloseModal}>
      {currentModal}
    </Modal>
  );
};

export default ModalController;
