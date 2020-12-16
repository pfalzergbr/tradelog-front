import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import ErrorMessage from '../Shared/ErrorMessage';


const basicTradeSchema = yup.object().shape({
    symbol: yup.string().required(),
    outcome: yup.string().required(),
    bias: yup.string().required(),
    amount: yup.number().required(),
    account: yup.string().required(),
    notes: yup.string(),
    date: yup.date().required(),
});


const TradeForm = ({ onSubmit, accounts }) => {
    const { register, handleSubmit, formState, errors } = useForm({
        resolver: yupResolver(basicTradeSchema),
        mode: 'onChange',
        defaultValues: {
            notes: '',
        },
    });
    const { isValid } = formState;
    
    return (
        <div className='form-container'>
            <h1>New Trade</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='symbol'>Symbol</label>
                <input
                    name='symbol'
                    ref={register}
                    placeholder='Trade symbol or ticker'
                />
                {errors.symbol && (
                    <ErrorMessage message={errors.symbol.message} />
                )}
                <label htmlFor='account'>Account</label>
                <select name='account' ref={register}>
                    {accounts &&
                        accounts.map((account) => (
                            <option key={account.account_id} value={account.account_id}>
                                {account.account_name}
                            </option>
                        ))}
                </select>
                <label htmlFor='outcome'>Outcome</label>
                <select name='outcome' ref={register}>
                    <option value='breakeven'>Breakeven</option>
                    <option value='profit'>Profit</option>
                    <option value='loss'>Loss</option>
                </select>
                <label htmlFor='bias'>Bias</label>
                <select name='bias' ref={register}>
                    <option value='bullish'>Bullish</option>
                    <option value='bearish'>Bearish</option>
                </select>

                <label htmlFor='amount'>Amount</label>
                <input
                    type='number'
                    step='0.01'
                    name='amount'
                    ref={register}
                    placeholder='Profit or loss value'
                />
                {errors.amount && (
                    <ErrorMessage message={errors.amount.message} />
                )}
                <label htmlFor='notes'>Notes</label>
                <textarea
                    name='notes'
                    ref={register}
                    placeholder='Optional notes'
                />
                {errors.notes && (
                    <ErrorMessage message={errors.notes.message} />
                )}
                <label htmlFor='date'>Date</label>
                <input type='date' name='date' ref={register}></input>
                {errors.date && <ErrorMessage message={errors.date.message} />}
                <button disabled={!isValid} type='submit'>
                    New Trade
                </button>
            </form>
        </div>
    );
};

export default TradeForm;
