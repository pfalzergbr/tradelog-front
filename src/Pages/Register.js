import React from 'react';
import {useHistory, Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = (props) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory();

    const onSubmit = (data) => {
        console.log(data);
        history.push('/')
    };

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
                <label htmlFor='verify'>Password</label>
                <input name='verify' ref={register} />
                <button type='submit'>Log in</button>
                <Link to={'/user/login'}>Already have an account? Log in here.</Link>
                <Link to={'/user/login'}>Forgot your password?</Link>
            </form>

        </div>
    );
};

export default Register;