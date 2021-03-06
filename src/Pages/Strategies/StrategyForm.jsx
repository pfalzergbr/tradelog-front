import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import InputText from '../Shared/ui/formControl/InputText';
import TextArea from '../Shared/ui/formControl/TextArea';
import Button from '../Shared/ui/Button';

const strategySchema = yup.object().shape({
  strategyName: yup.string().required('Strategy name is required'),
  description: yup.string().required('Description is required'),
});

const StrategyForm = ({strategyData = {}, onSubmit, closeModal, button = 'New Strategy'}) => {
  const { register, handleSubmit, formState, errors } = useForm({
    resolver: yupResolver(strategySchema),
    mode: 'onChange',
    defaultValues: {
      strategyName: strategyData.strategy_name,
      description: strategyData.description,
    },
  });
  const { isValid } = formState;
  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='form__title'>{ strategyData.strategy_name ? 'Edit Strategy' : 'New Strategy'}</h1>
        <div className='form__items'>
        <InputText
          name='strategyName'
          label='Strategy Name'
          register={register}
          errors={errors}
        />
        <TextArea
          placeholder='Brief description of the strategy'
          name='description'
          label='Description'
          register={register}
          errors={errors}
          isValid={isValid}
        />
        </div>
        <div className='form__button-container'>
        <Button buttonStyle='primary' type='submit' disabled={!isValid}>
          {button}
        </Button>
        <Button type='button' onClick={closeModal}>
        Cancel
      </Button>
        </div>
      </form>
    </div>
  );
};

export default StrategyForm;
