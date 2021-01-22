import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import RegisterForm from './RegisterForm';
import { storeUser } from '../../Services/storageService';

import LoadingGroup from '../Shared/LoadingGroup';
import { registerUser } from '../../Services/Requests/userService';

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async data => {
    const response = await registerUser(data, dispatch);
    if (data.keepLoggedIn) {
      storeUser({ user: response.user, token: response.token });
    }
    history.push(`/${response.user.userId}/dashboard`);
  };

  return (
    <LoadingGroup>
      <div className="register-page">
        <RegisterForm onSubmit={onSubmit} />
      </div>
    </LoadingGroup>
  );
};

export default Register;
