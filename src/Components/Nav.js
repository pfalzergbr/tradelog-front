import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import { AuthContext } from '../Context/MainContext';
import NewTrade from '../Pages/NewTrade';

const Nav = (props) => {
    const links = props.data;
    const { token, logout } = useContext(AuthContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className='main-navigation container'>
            <div className='main-navigation__navlinks'>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                    <NewTrade closeModal={closeModal} />
                </Modal>
                {links.map((link) => (
                    <Link key={link.to} exact to={link.to} className="navlink">
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className='main-navigation__user-container'>
                {token && (
                    <span>Welcome, {props.user && props.user.userName}</span>
                )}
                {/* Logout button for the time being*/}
                {token && <a className="navlink" onClick={logout}>Logout</a>}
                {token && <a className="navlink" onClick={openModal}>QuickTrade</a>}
            </div>
        </div>
    );
};

export default Nav;
