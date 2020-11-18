import React, { useEffect, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import ErrorMessage from '../Components/UI/ErrorMessage'
import Loading from '../Components/Loading';
import { AuthContext } from '../Context/MainContext';
import { useAxios } from '../Hooks/useAxios';

const profileSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    // verify: yup
    //     .string()
    //     .oneOf(
    //         [yup.ref('password'), null],
    //         'Confirmation has to match your password',
    //     )
    //     .required(),
});

const Profile = (props) => {
    const { token } = useContext(AuthContext);
    const { isLoading, sendRequest } = useAxios();
    const [userProfile, setUserProfile] = useState({});
    const { name, email } = userProfile;

    const { register, handleSubmit, watch, errors, reset } = useForm({
        resolver: yupResolver(profileSchema),
        mode: 'onTouched',
        defaultValues: {
            name: name,
            email: email,
        },
    });

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await sendRequest(
                    'http://localhost:3000/api/user/profile',
                    'GET',
                    {},
                    {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                );
                setUserProfile(response.data[0]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUserProfile();
    }, []);


    useEffect(() => {
        if (userProfile) {
          reset({
            name,email
          });
        }
      }, [userProfile]);

    const onSubmit = async () => {};

    return (
        <React.Fragment>
            {isLoading && <Loading />}
            {!isLoading && (
                <React.Fragment>
                    <h1>Edit Profile</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor='name'>Name</label>
                        <input name='name' ref={register} />
                        {errors.name && (
                            <ErrorMessage message={errors.name.message} />
                        )}
                        <label htmlFor='email'>E-mail</label>
                        <input name='email' ref={register} />
                        {errors.email && (
                            <ErrorMessage message={errors.email.message} />
                        )}
                        <button>Save Changes</button>
                    </form>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default Profile;
