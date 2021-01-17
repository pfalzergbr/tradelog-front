import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from './Redux/Actions/authActions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import ModalController from './Pages/Shared/ModalController';
import AppRouter from './Routers/AppRouter';
import { populateUserData } from './Services/Requests/userService';

const AppContainer = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const { token } = auth;

  useEffect(() => {
    if (token) {
      populateUserData(token, dispatch);
    }
  }, [token, dispatch]);

  useEffect(() => {

    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.user && userData.token) {
      dispatch(loadUser(userData));
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <ToastContainer
        position='bottom-right'
        hideProgressBar
        closeOnClick
        autoClose={5000}
      />
      <ModalController />
      <AppRouter />
    </React.Fragment>
  );
};

export default AppContainer;
