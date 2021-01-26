import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../Shared/ui/Button';
import InputText from '../Shared/ui/formControl/InputText';
import TextArea from '../Shared/ui/formControl/TextArea';

const accountSchema = yup.object().shape({
  accountName: yup.string().required('Account name is required'),
  description: yup.string().required('Description is required'),
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
          <h3 className='form__title'>Edit Account</h3>
          <div className='form__items'>
            <InputText
              name='accountName'
              label='Account Name'
              register={register}
              errors={errors}
            />
            <TextArea
              name='description'
              label='Description'
              register={register}
              errors={errors}
            />
          </div>
          <div className='form__button-container'>
            <Button buttonStyle='primary' disabled={!isValid} type='submit'>
              Edit Account
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default EditAccountForm;
