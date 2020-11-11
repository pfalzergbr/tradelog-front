import React from 'react';
import {useHistory, Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import ErrorMessage from '../Components/UI/ErrorMessage'

const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .required(),
});


const Login = (props) => {
    const { register, handleSubmit, watch, errors, formState } = useForm({
        resolver: yupResolver(loginSchema),
        mode: 'onChange'
    });
    const { isValid } = formState
    const history = useHistory();

    console.log(isValid);

    const onSubmit = (data) => {
        console.log(data);
        history.push('/')
    };
    


    return (
        <div>
            <h1>{Login}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='email'>E-mail</label>
                <input name='email' ref={register} />
                <label htmlFor='password'>Password</label>
                <input type="password" name='password' ref={register} />
                <button disabled={!isValid} type='submit'>Log in</button>
                <Link to ='/user/register'>Register here</Link>
            </form>
           

        </div>
    );
};

export default Login;
