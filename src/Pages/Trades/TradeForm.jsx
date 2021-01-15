import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import Button from '../Shared/ui/Button';

import ErrorMessage from '../Shared/ErrorMessage';

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

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit(onSubmit)} className='form form--trade'>
        <h1 className='form__title'>New Trade</h1>
        <div className='form__items'>
          <div className='form-control'>
            <label htmlFor='symbol'>Symbol</label>
            <input
              name='symbol'
              ref={register}
              placeholder='Trade symbol or ticker'
            />
            {errors.symbol && <ErrorMessage message={errors.symbol.message} />}
          </div>
          <div className='form-control'>
            <label htmlFor='account'>Account</label>
            <select name='account' ref={register}>
              {accounts &&
                accounts.map(account => (
                  <option key={account.account_id} value={account.account_id}>
                    {account.account_name}
                  </option>
                ))}
            </select>
          </div>
          <div className='form-control'>
            <label htmlFor='strategy'>Strategy</label>
            <select name='strategy' ref={register}>
              {accountStrategies &&
                accountStrategies.map(strategy => (
                  <option
                    key={strategy.strategy_id}
                    value={strategy.strategy_id}>
                    {strategy.strategy_name}
                  </option>
                ))}
            </select>
            <label htmlFor='outcome'>Outcome</label>
            <select name='outcome' ref={register}>
              <option value='breakeven'>Breakeven</option>
              <option value='profit'>Profit</option>
              <option value='loss'>Loss</option>
            </select>
          </div>
          <div className='form-control'>
            <label htmlFor='bias'>Bias</label>
            <select name='bias' ref={register}>
              <option value='bullish'>Bullish</option>
              <option value='bearish'>Bearish</option>
            </select>
          </div>
          <div className='form-control'>
            <label htmlFor='amount'>Amount</label>
            <input
              type='number'
              step='0.01'
              name='amount'
              ref={register}
              placeholder='Profit or loss value'
            />
            {errors.amount && <ErrorMessage message={errors.amount.message} />}
          </div>
          <div className='form-control'>
            <label htmlFor='notes'>Notes</label>
            <textarea
              name='notes'
              ref={register}
              placeholder='Optional notes'
            />
            {errors.notes && <ErrorMessage message={errors.notes.message} />}
          </div>
          <div className='form-control'>
            <label htmlFor='date'>Date</label>
            <input type='date' name='date' ref={register}></input>
            {errors.date && <ErrorMessage message={errors.date.message} />}
          </div>
        </div>
        <Button disabled={!isValid} buttonStyle='primary' type='submit'>
          New Trade
        </Button>
      </form>
    </div>
  );
};

export default TradeForm;
