import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMessage from '../Shared/ErrorMessage';
import Button from '../Shared/ui/Button';

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
      <div className='form-container'>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <h1>Account Details</h1>
          <div className='form__items'>
            <div className='form-control'>
              <label htmlFor='accountName'>Account Name</label>
              <input name='accountName' ref={register} />
              {errors.symbol && (
                <ErrorMessage message={errors.accountName.message} />
              )}
            </div>
            <div className='form-control'>
              <label htmlFor='description'>Description</label>
              <textarea name='description' ref={register} />
              {errors.symbol && (
                <ErrorMessage message={errors.description.message} />
              )}
            </div>
            <div className='form__button-container'>
            <Button buttonStyle='primary' disabled={!isValid} type='submit'>Edit Account</Button>
            </div>
            </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default EditAccountForm;
