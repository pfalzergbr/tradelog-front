import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import ErrorMessage from '../Components/UI/ErrorMessage'

const registerSchema = yup.object().shape({
    name: yup
        .string()
        .required(),
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .min(6)
        .required(),
    verify: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Confirmation has to match your password')
        .required()
});

const Register = (props) => {
    const { register, handleSubmit, watch, errors, formState } = useForm({
        resolver: yupResolver(registerSchema),
        mode: 'onTouched',
    });
    const { isValid } = formState
    const history = useHistory();


    
    const onSubmit = (data) => {
        console.log(data);
        history.push('/');
    };

    console.log(errors);
    return (
        <div>
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='name'>Name</label>
                <input name='name' ref={register} />
                { errors.name && <ErrorMessage message={errors.name.message} /> }
                <label htmlFor='email'>E-mail</label>
                <input name='email' ref={register} />
                { errors.email && <ErrorMessage message={errors.email.message} /> }
                <label htmlFor='password'>Password</label>
                <input type="password" name='password' ref={register} />
                { errors.password && <ErrorMessage message={errors.password.message} /> }
                <label htmlFor='verify'>Confirm Password</label>
                <input type="password" name='verify' ref={register} />
                { errors.verify && <ErrorMessage message={errors.verify.message} /> }
                <button type='submit'>Log in</button>
                <Link to={'/user/login'}>
                    Already have an account? Log in here.
                </Link>
                <Link to={'/user/login'}>Forgot your password?</Link>
            </form>
        </div>
    );
};

export default Register;
