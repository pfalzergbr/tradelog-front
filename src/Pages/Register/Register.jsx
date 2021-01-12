import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import RegisterForm from './RegisterForm';
import { storeUser } from '../../Services/storageService';
import { login } from '../../Redux/Actions/authActions';

import LoadingGroup from '../Shared/LoadingGroup';

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async data => {
    try {
      console.log(data);
      const response = await dispatch(
        login({
          method: 'post',
          url: `${process.env.REACT_APP_API}/api/user/`,
          data,
        }),
      );
      storeUser(response);
      history.push(`/${response.user.userId}/dashboard`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoadingGroup>
      <RegisterForm onSubmit={onSubmit} />
    </LoadingGroup>
  );
};

export default Register;
