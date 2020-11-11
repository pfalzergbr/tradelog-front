import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useAxios } from '../Hooks/useAxios';



const Profile = (props) => {
    const { userId } = useParams();
    const { isLoading, sendRequest} = useAxios();



    // const handleClick = async () => {
    //     try {
    //         const data = await sendRequest(
    //             'http://localhost:5000/api/places/user/5fabb7b2a9e436412c6443a7',
    //         );
           
    //     } catch (err) {}

    //     };


    return (
        <div>
            Profile! Id: {userId}

        </div>
    );
};

export default Profile;
