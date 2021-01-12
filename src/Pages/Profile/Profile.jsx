import React from 'react';
import { useSelector } from 'react-redux';
import LoadingGroup from '../Shared/LoadingGroup';
import ProfileForm from './ProfileForm';

const Profile = () => {
  const { user } = useSelector(state => state.auth);

  // const history = useHistory();

  // Modal Data to pass down.
  // const modalData = {
  //     header:
  //     message:
  //         'You are about to delete your user. This action cannot be reversed, and removes all your accounts, trades, Are you sure you want to go ahead? ',
  //     label: 'If you are sure to proceed, please tick this box to confirm',
  //     button: 'Delete'
  //     };

  // Fetching User Profile and loads into userProfile variable in state.
  // useEffect(() => {
  //     const fetchUserProfile = async () => {
  //         try {
  //             const response = await sendRequest(
  //                 `${process.env.REACT_APP_API}/api/user/profile`,
  //                 'GET',
  //                 {},
  //                 {
  //                     'Content-Type': 'application/json',
  //                     Authorization: `Bearer ${token}`,
  //                 },
  //             );
  //             setUserProfile(response.data[0]);
  //         } catch (error) {
  //             console.log(error);
  //         }
  //     };
  //     fetchUserProfile();
  // }, [ sendRequest, token ]);

  // Sends a delete request to the API. This function is passed to the modal, executable from there.
  // const deleteUser = async () => {
  //     try {
  //         const response = await sendRequest(
  //             `http://localhost:3000/api/user/profile/${user.userId}`,
  //             'DELETE',
  //             {},

  //             {
  //                 'Content-Type': 'application/json',
  //                 Authorization: `Bearer ${token}`,
  //             },
  //         );
  //         // logout();
  //         history.replace(`/`);
  //         return response
  //     } catch (error) {
  //         console.log(error);
  //     }
  // };

  // Modal Open/Close Controls
  const openModal = () => {};

  return (
    <LoadingGroup>
    <ProfileForm user={user} />
          <button onClick={openModal}>Delete</button>
    </LoadingGroup>
    
  );
};

export default Profile;
