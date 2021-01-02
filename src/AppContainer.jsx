import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from './Redux/Actions/authActions';
import { loadUserData } from './Redux/Actions/loadActions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import ModalController from './Pages/Shared/ModalController';
import AppRouter from './Routers/AppRouter';

const AppContainer = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const { token } = auth;

  useEffect(() => {
    const populateUserData = async token => {
      try {
        dispatch(
          loadUserData({
            url: `${process.env.REACT_APP_API}/api/user/userData`,
            auth: { Authorization: `Bearer ${token}` },
          }),
        );
      } catch (error) {
        console.log(error);
      }
    };

    if (token) {
      populateUserData(token);
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
      <ToastContainer />
      <ModalController />
      <AppRouter />
    </React.Fragment>
  );
};

export default AppContainer;
