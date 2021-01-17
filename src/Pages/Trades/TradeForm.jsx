import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import Button from '../Shared/ui/Button';

import InputText from '../Shared/ui/formControl/InputText';
import TextArea from '../Shared/ui/formControl/TextArea';
import Select from '../Shared/ui/formControl/Select';

const basicTradeSchema = yup.object().shape({
  symbol: yup.string().required(),
  outcome: yup.string().required(),
  bias: yup.string().required(),
  amount: yup.number().required(),
  account: yup.string().required(),
  strategy: yup.string().required(),
  notes: yup.string(),
  date: yup.date().required(),
});

const TradeForm = ({ onSubmit, accounts }) => {
  const { register, handleSubmit, formState, errors, watch } = useForm({
    resolver: yupResolver(basicTradeSchema),
    mode: 'onChange',
    defaultValues: {
      notes: '',
    },
  });
  const { isValid } = formState;
  const strategies = useSelector(state => state.strategy.strategies) || [];
  const watchAccount = watch('account');
  const accountStrategies = strategies.filter(
    strategy => strategy.account_id === watchAccount,
  );

  const outcomeOptions = [
    { optionValue: 'breakeven', optionName: 'Breakeven' },
    { optionValue: 'profit', optionName: 'Profit' },
    { optionValue: 'loss', optionName: 'Loss' },
  ];

  const biasOptions = [
    { optionValue: 'neutral', optionName: 'Neutral' },
    { optionValue: 'bullish', optionName: 'Bullish' },
    { optionValue: 'bearish', optionName: 'Bearish' },
  ];

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit(onSubmit)} className='form form--trade'>
        <h2 className='form__title'>New Trade</h2>
        <div className='form__items'>
          <InputText
            label='Symbol'
            placeholder='Trade symbol or ticker'
            name='symbol'
            register={register}
            errors={errors}
          />
          <Select
            name='account'
            label='Account'
            optionsArray={accounts}
            register={register}
            optionValue='account_id'
            optionName='account_name'
          />
          <Select
            name='strategy'
            label='Strategy'
            optionsArray={accountStrategies}
            register={register}
            optionValue='strategy_id'
            optionName='strategy_name'
          />
          <Select
            name='outcome'
            label='Trade Outcome'
            optionsArray={outcomeOptions}
            register={register}
            optionValue='optionValue'
            optionName='optionName'
          />
          <Select
            name='bias'
            label='Trade Bias'
            optionsArray={biasOptions}
            register={register}
            optionValue='optionValue'
            optionName='optionName'
          />
          <InputText
            label='Amount'
            placeholder='Profit or loss value'
            name='amount'
            type='number'
            register={register}
            errors={errors}
          />
          <TextArea
            label='Notes'
            placeholder='Optional notes'
            name='notes'
            register={register}
            errors={errors}
          />
          <InputText
            label='Date'
            name='date'
            type='date'
            register={register}
            errors={errors}
          />
        </div>
        <div className='form__button-container'>
          <Button disabled={!isValid} buttonStyle='primary' type='submit'>
            New Trade
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TradeForm;
