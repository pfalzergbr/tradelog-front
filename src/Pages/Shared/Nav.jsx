import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Modal from 'react-modal';

import { clearUser } from '../../Services/storageService';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Redux/Actions/authActions';
import NewTrade from '../Trades/NewTrade';

const Nav = (props) => {
    const history = useHistory();
    const links = props.data;
    const auth = useSelector((state) => state.auth);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const dispatch = useDispatch();

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const logoutUser = () => {
        dispatch(logout());
        clearUser();
        history.push('/');
    };

    return (
        <div className='main-navigation container'>
            <div className='nav-navigation__logo-container'>
                <Link to='/' exact className='main-navigation__logo'>
                    TradeLog
                </Link>
            </div>
            <div className='main-navigation__navlinks'>
                <Modal
                    appElement={document.getElementById('app')}
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}>
                    <NewTrade closeModal={closeModal} />
                </Modal>
                {links.map((link) => (
                    <Link key={link.to} exact to={link.to} className='navlink'>
                        {link.name}
                    </Link>
                ))}
                {auth.token && (
                    <button
                        className='main-navigation__btn'
                        onClick={logoutUser}>
                        Logout
                    </button>
                )}
                {auth.token && (
                    <button
                        className='main-navigation__btn main-navigation__btn--cta'
                        onClick={openModal}>
                        QuickTrade
                    </button>
                )}
            </div>
        </div>
    );
};

export default Nav;
