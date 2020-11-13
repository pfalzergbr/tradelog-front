import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal'

import { AuthContext } from '../Context/MainContext';
import NewTrade from '../Pages/NewTrade'

const Nav = (props) => {
    const links = props.data;
    const { token, logout } = useContext(AuthContext);
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    
    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}><NewTrade closeModal={closeModal} /></Modal>
            {links.map((link) => (
                <Link key={link.to} exact to={link.to}>
                    {link.name}
                </Link>
                ))}
            {token && <span>Welcome, {props.user && props.user.userName}</span>}
            {/* Logout button for the time being*/}
            {token && <button onClick={logout}>Logout</button>}
            {token && <button onClick={openModal}>QuickTrade</button>}
        </div>
    );
};

export default Nav;
