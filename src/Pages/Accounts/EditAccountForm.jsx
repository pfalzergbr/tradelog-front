import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMessage from '../Shared/ErrorMessage';

const accountSchema = yup.object().shape({
  accountName: yup.string().required(),
  description: yup.string().required(),
});

const EditAccountForm = ({ onSubmit, data }) => {
  const { account_name: accountName, description } = data.account;
  const { register, handleSubmit, formState, errors } = useForm({
    resolver: yupResolver(accountSchema),
    mode: 'onChange',
    defaultValues: {
      accountName,
      description,
    },
  });
  const { isValid } = formState;

  return (
    <React.Fragment>
      <h1>Edit Account Details</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='accountName'>Account Name</label>
        <input name='accountName' ref={register} />
        {errors.symbol && <ErrorMessage message={errors.accountName.message} />}
        <label htmlFor='description'>Description</label>
        <textarea name='description' ref={register} />
        {errors.symbol && <ErrorMessage message={errors.description.message} />}

        <button disabled={!isValid} type='submit'>
          Edit Account
        </button>
      </form>
    </React.Fragment>
  );
};

export default EditAccountForm;
