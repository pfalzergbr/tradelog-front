import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { AuthContext } from '../Context/MainContext';
import { useAxios } from '../Hooks/useAxios';


const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const Login = (props) => {
    const auth = useContext(AuthContext);
    const { isLoading, sendRequest } = useAxios();
    const { register, handleSubmit, watch, errors, formState } = useForm({
        resolver: yupResolver(loginSchema),
        mode: 'onChange',
    });
    const { isValid } = formState;
    const history = useHistory();

  
    // Submits a Post request for /api/user/login
    const onSubmit = async (data) => {
        try {
            const response = await sendRequest(
                'http://localhost:3000/api/user/login',
                'POST',
                JSON.stringify(data),
                { 'Content-Type': 'application/json' },
            );
            auth.login(response.data.user, response.data.token);
            console.log(response.data);
            history.push(`/${response.data.user.userId}/dashboard`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>{Login}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='email'>E-mail</label>
                <input name='email' ref={register} />
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' ref={register} />
                <button disabled={!isValid} type='submit'>
                    Log in
                </button>
                <Link to='/user/register'>Register here</Link>
            </form>
        </div>
    );
};

export default Login;
