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
    <nav className='nav'>
      <div className='nav__container'>
        <div className='nav__logo-container'>

            <h3 className='logo'>TradeLog</h3>
 
        </div>
        <div className='nav__link-container'>
          {links.map(link => (
            <Link key={link.to} to={link.to} className='btn btn--outline'>
              {link.name}
            </Link>
          ))}
          {auth.token && (
            <button className='btn btn--outline' onClick={logoutUser}>
              Logout
            </button>
          )}
          {auth.token && (
            <button className='btn btn--primary' onClick={handleOpenModal}>
              QuickTrade
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
