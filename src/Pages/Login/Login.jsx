import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './LoginForm';

import { storeUser } from '../../Services/storageService';
import { login } from '../../Redux/Actions/authActions';
import Footer from '../Shared/Footer';

import LoadingGroup from '../Shared/LoadingGroup';

const Login = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  // Submits a Post request for /api/user/login
  const onSubmit = async data => {
    try {
      const response = await dispatch(
        login({
          method: 'post',
          url: `${process.env.REACT_APP_API}/api/user/login`,
          data,
        }),
      );
      storeUser({ user: response.user, token: response.token });
      history.push(`/${response.user.userId}/dashboard`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoadingGroup>
      <div className='login-page'>
        <LoginForm onSubmit={onSubmit} />
        <Footer />
      </div>
    </LoadingGroup>
  );
};

export default Login;
