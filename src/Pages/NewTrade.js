import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Loading from '../Components/Loading';
import { AuthContext } from '../Context/MainContext';
import { useAxios } from '../Hooks/useAxios';
import ErrorMessage from '../Components/UI/ErrorMessage';

const basicTradeSchema = yup.object().shape({
    symbol: yup.string().required(),
    outcome: yup.string().required(),
    bias: yup.string().required(),
    amount: yup.number().required(),
    accountId: yup.string().required(),
});

const NewTrade = (props) => {
    //TODO: Basic form, or extended?
    const { user, token } = useContext(AuthContext);
    const { accounts } = user;
    const { isLoading, sendRequest } = useAxios();
    const { register, handleSubmit, formState, errors } = useForm({
        resolver: yupResolver(basicTradeSchema),
        mode: 'onTouched',
    });
    const { isValid } = formState;
    //TODO: Get the id from the actual user

    const onSubmit = async (data) => {
        const formData = {
            ...data,
            trader: user.userId,
        };
        try {
            const response = await sendRequest(
                'http://localhost:3000/api/trades/',
                'POST',
                JSON.stringify(formData),
                {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            );
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <React.Fragment>
            {isLoading && <Loading />}
            {!isLoading && (
                <div>
                    <button onClick={props.closeModal}>X</button>

                    <h1>New Trade</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor='symbol'>Symbol</label>
                        <input name='symbol' ref={register} />
                        {errors.symbol && (
                            <ErrorMessage message={errors.symbol.message} />
                        )}
                        <label htmlFor='account'>Account</label>
                        <select name='account' ref={register}>
                            {accounts &&
                                accounts.map((account) => (
                                    <option
                                        key={account._id}
                                        value={account._id}>
                                        {account.accountName}
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
                        />
                        {errors.amount && (
                            <ErrorMessage message={errors.amount.message} />
                        )}
                        <button disabled={!isValid} type='submit'>
                            New Trade
                        </button>
                    </form>
                </div>
            )}
        </React.Fragment>
    );
};

export default NewTrade;
