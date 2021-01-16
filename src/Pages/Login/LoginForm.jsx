import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import Button from '../Shared/ui/Button';
import InputText from '../Shared/ui/formControl/InputText';


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
        <h1 className='form__title'>Login</h1>
        <div className='form__items'>
          <InputText name={'email'} label={'E-mail'} register={register} />
          <InputText
            name={'password'}
            label={'Password'}
            register={register}
          />
        </div>
        <div className='form__button-container'>
          <Button
            buttonStyle='btn btn--primary form__btn '
            disabled={!isValid}
            type='submit'>
            Log In
          </Button>
          <Link className='form__link' to='/user/register'>
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
