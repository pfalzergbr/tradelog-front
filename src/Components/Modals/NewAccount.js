import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Loading from '../Loading';
import { AuthContext } from '../../Context/MainContext';
import { useRequest } from '../../Hooks/useRequest';
import ErrorMessage from '../UI/ErrorMessage';
const API = process.env.REACT_APP_API;

const accountSchema = yup.object().shape({
    accountName: yup.string().required(),
    balance: yup.number().required(),
    description: yup.string().required(),
});

const NewTrade = (props) => {
    //TODO: Basic form, or extended?
    const { user, token, addAccount } = useContext(AuthContext);
    const { isLoading, sendRequest } = useRequest();
    const { register, handleSubmit, formState, errors } = useForm({
        resolver: yupResolver(accountSchema),
        mode: 'onChange',
    });
    const { isValid } = formState;
    //TODO: Get the id from the actual user

    const onSubmit = async (data) => {
        const formData = {
            ...data,
            userId: user.userId,
        };
        try {
            const response = await sendRequest(
                `${API}/api/user/accounts`,
                'POST',
                JSON.stringify(formData),
                {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            );
            addAccount(response.data);

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
