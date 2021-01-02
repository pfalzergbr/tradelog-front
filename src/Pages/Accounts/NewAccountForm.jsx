import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMessage from '../Shared/ErrorMessage';

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
    <React.Fragment>
      <h1>Create new account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='accountName'>Account Name</label>
        <input name='accountName' ref={register} />
        {errors.symbol && <ErrorMessage message={errors.accountName.message} />}
        <label htmlFor='balance'>Account Balance</label>
        <input name='balance' type='number' step='0.01' ref={register} />
        {errors.symbol && <ErrorMessage message={errors.balance.message} />}
        <label htmlFor='description'>Description</label>
        <textarea name='description' ref={register} />
        {errors.symbol && <ErrorMessage message={errors.description.message} />}

        <button disabled={!isValid} type='submit'>
          Create Account
        </button>
      </form>
    </React.Fragment>
  );
};

export default NewAccountForm;
