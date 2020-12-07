import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Footer from '../Components/Footer';
import Loading from '../Components/Loading';
import { AuthContext } from '../Context/MainContext';
import { useRequest } from '../Hooks/useRequest';
const API = process.env.REACT_APP_API;

const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const Login = (props) => {
    const auth = useContext(AuthContext);
    const { isLoading, sendRequest } = useRequest();
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
                `${API}/api/user/login`,
                'POST',
                JSON.stringify(data),
                { 'Content-Type': 'application/json' },
            );
            auth.login(response.data.user, response.data.token);
            history.push(`/${response.data.user.userId}/dashboard`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='login-page'>
            {isLoading && <Loading />}
            {!isLoading && (
                <div className='form-container'>
                    <form
                        className='form form--login'
                        onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="form__title">Login</h2>
                        <label className='form__label' htmlFor='email'>
                            E-mail
                        </label>
                        <input
                            className='form__input'
                            name='email'
                            placeholder="E-mail"
                            ref={register}
                        />
                        <label className='form__label' htmlFor='password'>
                            Password
                        </label>
                        <input
                            className='form__input'
                            type='password'
                            name='password'
                            placeholder="Password"
                            ref={register}
                        />
                        <button
                            className='btn form__btn btn--primary'
                            disabled={!isValid}
                            type='submit'>
                            Log in
                        </button>
                        <Link className="form__link" to='/user/register'>Register here</Link>
                    </form>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Login;
