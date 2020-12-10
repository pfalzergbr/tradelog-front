import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

import { storeUser } from '../../Services/storageService';
import { login } from '../../Redux/Actions/authActions';
// import { loadAccounts } from '../../Redux/Actions/accountActions';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';
const API = process.env.REACT_APP_API;

const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const Login = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.requestReducer);

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(loginSchema),
        mode: 'onChange',
    });
    const { isValid } = formState;
    const history = useHistory();

    // Submits a Post request for /api/user/login
    const onSubmit = async (data) => {
        try {
            const response = await dispatch(
                login({method: 'post', url: `${API}/api/user/login`, data }),
            );
            // dispatch(loadAccounts(response));
            storeUser({user: response.user, token: response.token});

            history.push(`/${response.user.userId}/dashboard`);
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
                        <h2 className='form__title'>Login</h2>
                        <label className='form__label' htmlFor='email'>
                            E-mail
                        </label>
                        <input
                            className='form__input'
                            name='email'
                            placeholder='E-mail'
                            ref={register}
                        />
                        <label className='form__label' htmlFor='password'>
                            Password
                        </label>
                        <input
                            className='form__input'
                            type='password'
                            name='password'
                            placeholder='Password'
                            ref={register}
                        />
                        <button
                            className='btn form__btn btn--primary'
                            disabled={!isValid}
                            type='submit'>
                            Log in
                        </button>
                        <Link className='form__link' to='/user/register'>
                            Register here
                        </Link>
                    </form>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Login;
