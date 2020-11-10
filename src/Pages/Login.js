import React from 'react';
import {useHistory, Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = (props) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory();

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
                <input name='password' ref={register} />
                <button type='submit'>Log in</button>
                <Link to ='/user/register'>Register here</Link>
            </form>
           

        </div>
    );
};

export default Login;
