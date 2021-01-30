import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './LoginForm';

import { storeUser } from '../../Services/storageService';
import Footer from '../Shared/Footer';

import LoadingGroup from '../Shared/LoadingGroup';
import { loginUser } from '../../Services/Requests/userService';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { routeAnimation } from '../../Services/Animations/routeTransition';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Submits a Post request for /api/user/login
  const onSubmit = async data => {
    try {
      const response = await loginUser(data, dispatch);
      if (data.keepLoggedIn) {
        storeUser({ user: response.user, token: response.token });
      }
      history.push(`/${response.user.userId}/dashboard`);
      toast('Logged in successfully! Welcome back!');
    } catch (error) {
      toast.error('Cannot log in. Please try again');
    }
  };

  return (
    <LoadingGroup>
      <motion.div className='login-page' {...routeAnimation}>
        <LoginForm onSubmit={onSubmit} />
        <Footer />
      </motion.div>
    </LoadingGroup>
  );
};

export default Login;
