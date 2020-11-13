import React, {useContext} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { AuthContext } from '../Context/MainContext' 
import { useAxios } from '../Hooks/useAxios'
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
    const auth = useContext(AuthContext);
    const { isLoading, sendRequest } = useAxios();
    const { register, handleSubmit, watch, errors } = useForm({
        resolver: yupResolver(registerSchema),
        mode: 'onTouched',
    });
    
    const history = useHistory();


    //Submits a POST request for /api/user/register, returns a token and a user ID for auth context. 
    const onSubmit = async (data) => {

        try {
            const response = await sendRequest('http://localhost:3000/api/user/', 'POST', JSON.stringify(data), {'Content-Type': 'application/json'})
            auth.login(response.data.user, response.data.token)
            console.log(response.data)
            history.push(`/${response.data.user.userId}/dashboard`);
        } catch (error) {
            console.log(error);
        }
    };

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
                <button type='submit'>Register</button>
                <Link to={'/user/login'}>
                    Already have an account? Log in here.
                </Link>
                <Link to={'/user/login'}>Forgot your password?</Link>
            </form>
        </div>
    );
};

export default Register;
