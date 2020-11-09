import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = (props) => {
    const { userId } = useParams();

    return ( <div>Profile! Id: {userId}</div> );
}
 
export default Profile;