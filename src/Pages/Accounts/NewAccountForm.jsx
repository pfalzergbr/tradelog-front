import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMessage from '../Shared/ErrorMessage';
import Button from '../Shared/ui/Button';
import InputText from '../Shared/ui/formControl/InputText';
import TextArea from '../Shared/ui/formControl/TextArea';

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
          <InputText
            name='accountName'
            label='Account Name'
            register={register}
            errors={errors}
          />
          <InputText
            name='balance'
            label='Opening Balance'
            register={register}
            errors={errors}
          />
          <TextArea
            name='description'
            label='Description'
            register={register}
            errors={errors}
          />
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
