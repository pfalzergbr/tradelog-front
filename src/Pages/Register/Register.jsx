import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import RegisterForm from './RegisterForm';
import { storeUser } from '../../Services/storageService';

import LoadingGroup from '../Shared/LoadingGroup';
import { registerUser } from '../../Services/Requests/userService';
import { motion } from 'framer-motion';
import {
  routeAnimate,
  routeExit,
  routeInitial,
  routeTransition,
} from '../../Services/Animations/routeTransition';

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
      <motion.div
        className='register-page'
        initial={routeInitial}
        animate={routeAnimate}
        exit={routeExit}
        transition={routeTransition}>
        <RegisterForm onSubmit={onSubmit} />
      </motion.div>
    </LoadingGroup>
  );
};

export default Register;
