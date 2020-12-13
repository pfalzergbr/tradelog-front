import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

import { updateAccount } from '../../Redux/Actions/accountActions';
import Loading from '../Shared/Loading';
import ErrorMessage from '../Shared/ErrorMessage';
const API = process.env.REACT_APP_API;

const accountSchema = yup.object().shape({
    accountName: yup.string().required(),
    description: yup.string().required(),
});

const NewTrade = (props) => {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const { isLoading } = useSelector((state) => state.control);
    // const { isLoading } = useSelector((state) => state.accounts);
    const { account_name: accountName, account_id: accountId, description } = props.data;
    const { register, handleSubmit, formState, errors } = useForm({
        resolver: yupResolver(accountSchema),
        mode: 'onChange',
        defaultValues: {
            accountName,
            description,
        },
    });
    const { isValid } = formState;
    const history = useHistory();

    const onSubmit = async (data) => {
        try {
            const response = await dispatch(
                updateAccount({
                    method: 'patch',
                    url: `${API}/api/account/${accountId}`,
                    data,
                    auth: { Authorization: `Bearer ${token}` },
                }),
            );
            history.push(
                `/${response.updatedAccount.user_id}/accounts/${response.updatedAccount.account_id}`,
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
                           Edit Account
                        </button>
                    </form>
                </div>
            )}
        </React.Fragment>
    );
};

export default NewTrade;
