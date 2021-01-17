import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './LoginForm';

import { storeUser } from '../../Services/storageService';
import Footer from '../Shared/Footer';

import LoadingGroup from '../Shared/LoadingGroup';
import { loginUser } from '../../Services/Requests/userService';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Submits a Post request for /api/user/login
  const onSubmit = async data => {
    const response = await loginUser(data, dispatch);
    if (data.keepLoggedIn) {
      storeUser({ user: response.user, token: response.token });
    }
    history.push(`/${response.user.userId}/dashboard`);
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
