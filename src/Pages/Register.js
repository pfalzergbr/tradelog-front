import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
        .min(6),
    verify: yup
        .string()
        .min(6),
});

const Register = (props) => {
    const { register, handleSubmit, watch, errors } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(registerSchema),
    });
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
                <label htmlFor='email'>E-mail</label>
                <input name='email' ref={register} />
                <label htmlFor='password'>Password</label>
                <input name='password' ref={register} />
                <label htmlFor='verify'>Verify Password</label>
                <input name='verify' ref={register} />
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
