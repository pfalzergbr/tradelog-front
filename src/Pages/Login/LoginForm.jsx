import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });
  const { isValid } = formState;

  return (
    <div className='form-container'>
      <form className='form form--login' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='form__title'>Login</h2>
        <label className='form__label' htmlFor='email'>
          E-mail
        </label>
        <input
          className='form__input'
          name='email'
          placeholder='E-mail'
          ref={register}
        />
        <label className='form__label' htmlFor='password'>
          Password
        </label>
        <input
          className='form__input'
          type='password'
          name='password'
          placeholder='Password'
          ref={register}
        />
        <button
          className='btn btn--primary form__btn '
          disabled={!isValid}
          type='submit'>
          Log in
        </button>
        <Link className='form__link' to='/user/register'>
          Register here
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
