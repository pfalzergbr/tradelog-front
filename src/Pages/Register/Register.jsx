import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import RegisterForm from './RegisterForm';
import { storeUser } from '../../Services/storageService';
import { login } from '../../Redux/Actions/authActions';
import Loading from '../Shared/Loading';

const Register = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.control);
    const history = useHistory();

    const onSubmit = async (data) => {
        try {
            const response = await dispatch(
                login({ method: 'post', url: `${process.env.REACT_APP_API}/api/user/`, data }),
            );
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
                <RegisterForm onSubmit={onSubmit} />
            )}
        </React.Fragment>
    );
};

export default Register;
