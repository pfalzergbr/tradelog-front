import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMessage from '../../Shared/ErrorMessage';

import * as yup from 'yup';

const strategySchema = yup.object().shape({
    strategyName: yup.string().required(),
    description: yup.string().required(),
});

const StrategyForm = (props) => {
    const { onSubmit } = props;
    const { register, handleSubmit, formState, errors } = useForm({
        resolver: yupResolver(strategySchema),
        mode: 'onChange',
        defaultValues: {
            notes: '',
        },
    });
    const { isValid } = formState;

    return (
        <div className='form-container'>
            <h1>New Strategy</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='strategyName'>Strategy Name</label>
                <input
                    name='strategyName'
                    ref={register}
                    placeholder='Strategy name'
                />
                {errors.strategyName && (
                    <ErrorMessage message={errors.strategyName.message} />
                )}
                <label htmlFor='description'>Description</label>
                <textarea
                    name='description'
                    ref={register}
                    placeholder='Brief description of the strategy'
                />
                {errors.notes && (
                    <ErrorMessage message={errors.notes.message} />
                )}
            </form>
        </div>
    );
};

export default StrategyForm;
