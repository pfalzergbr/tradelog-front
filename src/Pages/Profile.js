import React, { useEffect, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Modal from 'react-modal';

import DeleteModal from '../Components/Modals/DeleteModal';
import ErrorMessage from '../Components/UI/ErrorMessage';
import Loading from '../Components/Loading';
import { AuthContext } from '../Context/MainContext';
import { useAxios } from '../Hooks/useAxios';

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

const Profile = (props) => {
    const { user, token, logout } = useContext(AuthContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { isLoading, sendRequest } = useAxios();
    const [userProfile, setUserProfile] = useState({});
    const { name, email } = userProfile;
    const history = useHistory();

    const { register, handleSubmit, watch, errors, reset } = useForm({
        resolver: yupResolver(profileSchema),
        mode: 'onTouched',
        defaultValues: {
            name: name,
            email: email,
        },
    });
    
    // Modal Data to pass down.
    const modalData = {
        header: 'Warning',
        message:
            'You are about to delete your user. This action cannot be reversed, and removes all your accounts, trades, Are you sure you want to go ahead? ',
        label: 'If you are sure to proceed, please tick this box to confirm',
        button: 'Delete'
        };


    // Fetching User Profile and loads into userProfile variable in state.
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

    //Populates the form with data from user profile
    useEffect(() => {
        if (userProfile) {
            reset({
                name,
                email,
            });
        }
    }, [userProfile]);

    // Sends a delete request to the API. This function is passed to the modal, executable from there. 
    const deleteUser = async () => {
        try {
            const response = await sendRequest(
                `http://localhost:3000/api/user/profile/${user.userId}`,
                'DELETE',
                {},

                {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            );
            logout();
            history.replace(`/`);
        } catch (error) {
            console.log(error);
        }
    };

    // Modal Open/Close Controls
    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };



    const onSubmit = async (data) => {
        try {
            const response = await sendRequest(
                `http://localhost:3000/api/user/profile/`,
                'PATCH',
                JSON.stringify(data),
                {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            );
            history.push(`/${user.userId}/dashboard`)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <React.Fragment>
            {isLoading && <Loading />}
            {!isLoading && (
                <React.Fragment>
                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                        <DeleteModal
                            closeModal={closeModal}
                            modalData={modalData}
                            onDelete={deleteUser}
                        />
                    </Modal>
                    <h1>Edit Profile</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor='name'>Name</label>
                        <input name='name' ref={register} />
                        {errors.name && (
                            <ErrorMessage message={errors.name.message} />
                        )}
                        {// <label htmlFor='email'>E-mail</label>
                        // <input name='email' ref={register} />
                        // {errors.email && (
                        //     <ErrorMessage message={errors.email.message} />
                        // )}
                        }<button>Save Changes</button>
                    </form>
                    <button onClick={openModal}>Delete</button>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default Profile;
