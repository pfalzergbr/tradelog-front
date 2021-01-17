import { login } from '../../Redux/Actions/authActions';
import { loadUserData } from '../../Redux/Actions/loadActions';
import { toast } from 'react-toastify';

export const loginUser = async (data, dispatch) => {
  try {
    console.log(data)
    const response = await dispatch(
      login({
        method: 'post',
        url: `${process.env.REACT_APP_API}/api/user/login`,
        data,
      }),
    );
    toast('Logged in successfully! Welcome back!');
    return response;
  } catch (error) {
    toast.error('Cannot log in. Please try again');
    console.log(error);
  }
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
    toast('Registered successfully. Welcome!');
    return response;
  } catch (error) {
    toast.error('Cannot log in. Please try again');
  }
};

export const populateUserData = async (token, dispatch) => {
  try {
    dispatch(
      loadUserData({
        url: `${process.env.REACT_APP_API}/api/user/userData`,
        auth: { Authorization: `Bearer ${token}` },
      }),
    );
  } catch (error) {
    toast.error('Cannot fetch data. Please try again');
  }
};