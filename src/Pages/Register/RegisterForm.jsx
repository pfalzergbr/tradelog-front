import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../Shared/ui/Button';
import InputText from '../Shared/ui/formControl/InputText';
import CheckBox from '../Shared/ui/formControl/CheckBox';

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
          <InputText
            name='name'
            placeholder='Display Name'
            label='Name'
            register={register}
            errors={errors}
          />
          <InputText name='email' label='E-mail' register={register} />
          <InputText
            name='password'
            label='Password'
            type='password'
            register={register}
            errors={errors}
          />
          <InputText
            name='verify'
            label='Confirm Password'
            placeholder='Repeat your password'
            type='password'
            register={register}
            errors={errors}
          />
          <CheckBox
            name='keepLoggedIn'
            label='Keep me logged in'
            register={register}
          />
        </div>
        <div className='form__button-container'>
          <Button buttonStyle='btn btn--primary form__btn' type='submit'>
            Sign up Now
          </Button>
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
