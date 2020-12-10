import React from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSelector } from 'react-redux';

import Loading from '../Shared/Loading';
import { useRequest } from '../../Hooks/useRequest';
import ErrorMessage from '../Shared/ErrorMessage';
const API = process.env.REACT_APP_API;

const accountSchema = yup.object().shape({
    accountName: yup.string().required(),
    description: yup.string().required(),
});

const NewTrade = (props) => {
    const { user, token } = useSelector(state => state.authReducer);
    const { isLoading, sendRequest } = useRequest();
    const {accountName, description} = props.data
    const { register, handleSubmit, formState, errors } = useForm({
        resolver: yupResolver(accountSchema),
        mode: 'onChange', defaultValues: {
            accountName, description
        }
    });
    const { isValid } = formState;
    const history = useHistory();
    const { userId, accountId} = useParams();


    const onSubmit = async (data) => {
        const formData = {
            ...data,
            trader: user.userId,
        };
        try {
            await sendRequest(
                `${API}/api/user/accounts/${accountId}`,
                'PATCH',
                JSON.stringify(formData),
                {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            );
            history.push(`/${userId}/accounts/${accountId}`)
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

                    <h1>Edit Account Details</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor='accountName'>Account Name</label>
                        <input name='accountName' ref={register} />
                        {errors.symbol && (
                            <ErrorMessage
                                message={errors.accountName.message}
                            />
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
