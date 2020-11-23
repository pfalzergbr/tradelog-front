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
        <div className="nav-navigation__logo-container">
            <Link to="/" exact className="main-navigation__logo">TradeLog</Link>
        </div>
            <div className='main-navigation__navlinks'>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                    <NewTrade closeModal={closeModal} />
                </Modal>
                {links.map((link) => (
                    <Link key={link.to} exact to={link.to} className="navlink">
                        {link.name}
                    </Link>
                ))}
                {token && <button className="main-navigation__btn" onClick={logout}>Logout</button>}
                {token && <button className="main-navigation__btn main-navigation__btn--cta" onClick={openModal}>QuickTrade</button>}
            </div>
        </div>
    );
};

export default Nav;
