import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { clearUser } from '../../Services/storageService';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Redux/Actions/authActions';
import { openModal } from '../../Redux/Actions/modalActions';

const Nav = props => {
  const history = useHistory();
  const links = props.data;
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal('newTrade', {}));
  };

  const logoutUser = () => {
    dispatch(logout());
    clearUser();
    history.push('/');
  };

  return (
    <div className='main-navigation container'>
      <div className='nav-navigation__logo-container'>
        <Link to='/' className='main-navigation__logo'>
          TradeLog
        </Link>
      </div>
      <div className='main-navigation__navlinks'>
        {links.map(link => (
          <Link key={link.to} to={link.to} className='navlink'>
            {link.name}
          </Link>
        ))}
        {auth.token && (
          <button className='main-navigation__btn' onClick={logoutUser}>
            Logout
          </button>
        )}
        {auth.token && (
          <button
            className='main-navigation__btn main-navigation__btn--cta'
            onClick={handleOpenModal}>
            QuickTrade
          </button>
        )}
      </div>
    </div>
  );
};

export default Nav;
