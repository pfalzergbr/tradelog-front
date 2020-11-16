import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../Components/Loading';
import { AuthContext } from '../Context/MainContext';
import { useAxios } from '../Hooks/useAxios';

const Profile = (props) => {
    const { token } = useContext(AuthContext);
    const { isLoading, sendRequest } = useAxios();
    const [userProfile, setUserProfile] = useState({});
    const {name, email} = userProfile;

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

    return (
        <React.Fragment>
            {isLoading && <Loading />}
            {!isLoading && (
                <div>
                    <h1>Hello, {name}</h1>
                    <h2>{email}</h2>
                </div>
            )}
        </React.Fragment>
    );
};

export default Profile;
