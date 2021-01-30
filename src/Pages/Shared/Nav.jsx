import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { clearUser } from '../../Services/storageService';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Redux/Actions/authActions';
import { openModal } from '../../Redux/Actions/modalActions';
import { selectHasAccounts } from '../../Redux/Reducers/account';

const Nav = props => {
  const history = useHistory();
  const links = props.data;
  const auth = useSelector(state => state.auth);
  const hasAccounts = useSelector(selectHasAccounts);

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal('newTrade', {}));
  };

  const openNewAccountModal = () => {
    dispatch(openModal('newAccount', {}));
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
          {auth.token && hasAccounts && (
            <button className='btn btn--primary' onClick={handleOpenModal}>
              QuickTrade
            </button>
          )}
          {auth.token && !hasAccounts && (
            <button className='btn btn--primary' onClick={openNewAccountModal}>
              New Account
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
