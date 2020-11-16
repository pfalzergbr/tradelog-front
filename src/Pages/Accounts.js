import React, { useState } from 'react';

import Modal from 'react-modal'
import NewAccount from '../Components/Modals/NewAccount'


const Accounts = (props) => {
    const [ modalIsOpen, setModalIsOpen ] = useState(false)

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }
    return ( 
        <div>Accounts
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}><NewAccount></NewAccount></Modal>
        <button onClick={openModal}>Create Account</button></div> );
}
 
export default Accounts;