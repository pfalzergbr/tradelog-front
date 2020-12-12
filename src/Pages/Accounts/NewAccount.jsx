import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { addNewAccount } from '../../Redux/Actions/accountActions';
import Loading from '../Shared/Loading';
import ErrorMessage from '../Shared/ErrorMessage';
const API = process.env.REACT_APP_API;

const accountSchema = yup.object().shape({
    accountName: yup.string().required(),
    balance: yup.number().required(),
    description: yup.string().required(),
});

const NewTrade = (props) => {
    //TODO: Basic form, or extended?
    const { token } = useSelector((state) => state.auth);
    const { isLoading } = useSelector((state) => state.control);
    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit, formState, errors } = useForm({
        resolver: yupResolver(accountSchema),
        mode: 'onChange',
    });
    const { isValid } = formState;

    const onSubmit = async (data) => {
        try {
            const response = await dispatch(
                addNewAccount({
                    method: 'post',
                    url: `${API}/api/account`,
                    data,
                    auth: { Authorization: `Bearer ${token}` },
                }),
            );
            history.push(
                `/${response.user_id}/accounts/${response.account_id}`,
            );
            props.closeModal();
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

                    <h1>Create new account</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor='accountName'>Account Name</label>
                        <input name='accountName' ref={register} />
                        {errors.symbol && (
                            <ErrorMessage
                                message={errors.accountName.message}
                            />
                        )}
                        <label htmlFor='balance'>Account Balance</label>
                        <input
                            name='balance'
                            type='number'
                            step='0.01'
                            ref={register}
                        />
                        {errors.symbol && (
                            <ErrorMessage message={errors.balance.message} />
                        )}
                        <label htmlFor='description'>Description</label>
                        <textarea name='description' ref={register} />
                        {errors.symbol && (
                            <ErrorMessage
                                message={errors.description.message}
                            />
                        )}

                        <button disabled={!isValid} type='submit'>
                            Create Account
                        </button>
                    </form>
                </div>
            )}
        </React.Fragment>
    );
};

export default NewTrade;
