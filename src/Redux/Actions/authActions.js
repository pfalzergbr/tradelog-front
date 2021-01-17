import { LOGIN_SUCCESS, LOAD_USER, LOGOUT } from '../constants';
import { handleThunk } from '../handleThunk';

export const loginSuccess = (userData) => ({
    type: LOGIN_SUCCESS,
    payload: userData,
});

export const logout = () => ({
    type: LOGOUT,
});

export const loadUser = (userData) => ({ type: LOAD_USER, payload: userData });
export const login = (requestData) => handleThunk(requestData, loginSuccess);

