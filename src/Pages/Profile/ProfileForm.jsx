import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import ErrorMessage from '../Shared/ErrorMessage';

const profileSchema = yup.object().shape({
    name: yup.string().required(),
    // email: yup.string().email().required(),
    // verify: yup
    //     .string()
    //     .oneOf(
    //         [yup.ref('password'), null],
    //         'Confirmation has to match your password',
    //     )
    //     .required(),
});

const ProfileForm = (props) => {
    const { user } = props;
    const { userName: name } = props.user;
    const { register, handleSubmit, errors, reset } = useForm({
        resolver: yupResolver(profileSchema),
        mode: 'onTouched',
        defaultValues: {
            name,
        },
    });
    
    const onSubmit = async (data) => {
        // try {
        //     const response = await sendRequest(
        //         `${API}/api/user/profile/`,
        //         'PATCH',
        //         JSON.stringify(data),
        //         {
        //             'Content-Type': 'application/json',
        //             Authorization: `Bearer ${token}`,
        //         },
        //     );
        //     history.push(`/${user.userId}/dashboard`)
        //     return response;
        // } catch (error) {
        //     console.log(error);
        // }
    };

    // Populates the form with data from user profile
    useEffect(() => {
        if (user) {
            reset({
                name,
            });
        }
    }, [user, name, reset]);
    return (
        <div className='form-container'>
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='name'>Name</label>
                <input name='name' ref={register} />
                {errors.name && <ErrorMessage message={errors.name.message} />}
                {
                    // <label htmlFor='email'>E-mail</label>
                    // <input name='email' ref={register} />
                    // {errors.email && (
                    //     <ErrorMessage message={errors.email.message} />
                    // )}
                }
                <button>Save Changes</button>
            </form>
        </div>
    );
};

export default ProfileForm;
