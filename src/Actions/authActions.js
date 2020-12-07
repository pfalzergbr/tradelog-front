import {  LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT  } from './constants';

export const loginPending = () => ({
    type: LOGIN_PENDING,
});

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS,
});
export const loginFail = () => ({
    type: LOGIN_FAIL,
});

export const logout = () => ({
    type: LOGOUT,
});
