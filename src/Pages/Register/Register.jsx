import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

import { storeUser } from '../../Services/storageService'
import { login } from '../../Redux/Actions/authActions'
import Loading from '../Shared/Loading';
import ErrorMessage from '../Shared/ErrorMessage';
const API = process.env.REACT_APP_API;

const registerSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    verify: yup
        .string()
        .oneOf(
            [yup.ref('password'), null],
            'Confirmation has to match your password',
        )
        .required(),
});

const Register = () => {
    const dispatch = useDispatch()
    const { isLoading } = useSelector((state) => state.requestReducer);
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(registerSchema),
        mode: 'onChange',
    });

    
    const onSubmit = async (data) => {
        try {
            const response = await dispatch(login({method: 'post', url:`${API}/api/user/`, data}));
            storeUser(response);
            history.push(`/${response.user.userId}/dashboard`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <React.Fragment>
            {isLoading && <Loading />}
            {!isLoading && (
                <div className='form-container'>
                    <form
                        className='form form--login'
                        onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='form__title'>Create Account</h2>
                        <label className='form__label' htmlFor='name'>
                            Name
                        </label>
                        <input
                            className='form__input'
                            name='name'
                            placeholder="Name"
                            ref={register}
                        />
                        {errors.name && (
                            <ErrorMessage message={errors.name.message} />
                        )}
                        <label className='form__label' htmlFor='email'>
                            E-mail
                        </label>
                        <input
                            className='form__input'
                            name='email'
                            placeholder="E-mail"
                            ref={register}
                        />
                        {errors.email && (
                            <ErrorMessage message={errors.email.message} />
                        )}
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
                        {errors.password && (
                            <ErrorMessage message={errors.password.message} />
                        )}
                        <label className='form__label' htmlFor='verify'>
                            Confirm Password
                        </label>
                        <input
                            className='form__input'
                            type='password'
                            name='verify'
                            placeholder="Repeat your password"
                            ref={register}
                        />
                        {errors.verify && (
                            <ErrorMessage message={errors.verify.message} />
                        )}
                        <button
                            className='btn form__btn btn--primary'
                            type='submit'>
                            Register
                        </button>
                        <p className='form__message'>
                            Already have an account?{' '}
                        </p>
                        <Link className='form__link' to={'/user/login'}>
                            Log in here.
                        </Link>
                        {
                            // <Link className="form__link" to={'/user/login'}>Forgot your password?</Link>
                        }{' '}
                    </form>
                </div>
            )}
        </React.Fragment>
    );
};

export default Register;
