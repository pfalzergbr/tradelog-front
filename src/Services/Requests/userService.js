import { login } from '../../Redux/Actions/authActions';
import { loadUserData } from '../../Redux/Actions/loadActions';
import { toast } from 'react-toastify';

export const loginUser = async (data, dispatch) => {
  // try {
    const response = await dispatch(
      login({
        method: 'post',
        url: `${process.env.REACT_APP_API}/api/user/login`,
        data,
      }),
    );
    // toast('Logged in successfully! Welcome back!');
    return response;
  // } catch (error) {
  //   // toast.error('Cannot log in. Please try again');
  // }
};

export const registerUser = async (data, dispatch) => {
  try {
    const response = await dispatch(
      login({
        method: 'post',
        url: `${process.env.REACT_APP_API}/api/user/`,
        data,
      }),
    );
    if (!response.token) {
      throw new Error()
    }
    toast('Registered successfully. Welcome!');
    return response;
  } catch (error) {
    toast.error('Cannot log in. Please try again');
  }
};

export const populateUserData = async (token, dispatch) => {
  try {
    const response = await dispatch(
      loadUserData({
        url: `${process.env.REACT_APP_API}/api/user/userData`,
        auth: { Authorization: `Bearer ${token}` },
      }),
    );
    return response;
  } catch (error) {
    toast.error('Cannot fetch data. Please try again');
  }
};