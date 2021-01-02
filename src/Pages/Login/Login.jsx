import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './LoginForm';

import { storeUser } from '../../Services/storageService';
import { login } from '../../Redux/Actions/authActions';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';

const Login = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.control);
  const history = useHistory();

  // Submits a Post request for /api/user/login
  const onSubmit = async data => {
    try {
      const response = await dispatch(
        login({ method: 'post', url: `${process.env.REACT_APP_API}/api/user/login`, data }),
      );
      storeUser({ user: response.user, token: response.token });
      history.push(`/${response.user.userId}/dashboard`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='login-page'>
      {isLoading && <Loading />}
      {!isLoading && <LoginForm onSubmit={onSubmit} />}
      <Footer />
    </div>
  );
};

export default Login;
