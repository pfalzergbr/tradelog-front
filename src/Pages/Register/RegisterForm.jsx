import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMessage from '../Shared/ErrorMessage';

const registerSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  verify: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      'Confirmation has to match your password',
    )
    .required(),
});

const RegisterForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onChange',
  });

  return (
    <div className='form-container'>
      <form className='form form--login' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='form__title'>Sign up</h1>
        <div className='form__items'>
          <div className='form-control'>
            <label className='form__label' htmlFor='name'>
              Name
            </label>
            <input
              className='form__input'
              name='name'
              placeholder='Display Name'
              ref={register}
            />
            {errors.name && <ErrorMessage message={errors.name.message} />}
          </div>
          <div className='form-control'>
            <label className='form__label' htmlFor='email'>
              E-mail
            </label>
            <input
              className='form__input'
              name='email'
              placeholder='E-mail'
              ref={register}
            />
            {errors.email && <ErrorMessage message={errors.email.message} />}
          </div>
          <div className='form-control'>
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
            {errors.password && (
              <ErrorMessage message={errors.password.message} />
            )}
          </div>
          <div className='form-control'>
            <label className='form__label' htmlFor='verify'>
              Confirm Password
            </label>
            <input
              className='form__input'
              type='password'
              name='verify'
              placeholder='Repeat your password'
              ref={register}
            />
            {errors.verify && <ErrorMessage message={errors.verify.message} />}
          </div>
          <div className='form-control form-control--checkbox'>
            <input name='keepLoggedIn' type='checkbox' ref={register}/>
            <label htmlFor='keepLoggedIn'>Keep me logged in</label>
          </div>
        </div>
        <div className='form__button-container'>
          <button className='btn btn--primary form__btn' type='submit'>
            Sign up now
          </button>
          <p className='form__message'>Already have an account? </p>
          <Link className='form__link' to={'/user/login'}>
            Log in here.
          </Link>
        </div>
        {
          // <Link className="form__link" to={'/user/login'}>Forgot your password?</Link>
        }
      </form>
    </div>
  );
};

export default RegisterForm;
