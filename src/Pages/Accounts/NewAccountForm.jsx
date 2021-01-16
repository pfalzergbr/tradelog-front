import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMessage from '../Shared/ErrorMessage';
import Button from '../Shared/ui/Button';

const accountSchema = yup.object().shape({
  accountName: yup.string().required(),
  balance: yup.number().required(),
  description: yup.string().required(),
});

const NewAccountForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState, errors } = useForm({
    resolver: yupResolver(accountSchema),
    mode: 'onChange',
  });
  const { isValid } = formState;

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <h2 className='form__title'>New Account</h2>
        <div className='form-items'>
          <div className='form-control'>
            <label htmlFor='accountName'>Account Name</label>
            <input name='accountName' ref={register} />
            {errors.symbol && (
              <ErrorMessage message={errors.accountName.message} />
            )}
          </div>
          <div className='form-control'>
            <label htmlFor='balance'>Account Balance</label>
            <input name='balance' type='number' step='0.01' ref={register} />
            {errors.symbol && <ErrorMessage message={errors.balance.message} />}
          </div>
          <div className='form-control'>
            <label htmlFor='description'>Description</label>
            <textarea name='description' ref={register} />
            {errors.symbol && (
              <ErrorMessage message={errors.description.message} />
            )}
          </div>
          <div className='form__button-container'>
            <Button disabled={!isValid} buttonStyle='primary' type='submit'>
              New Account
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewAccountForm;
