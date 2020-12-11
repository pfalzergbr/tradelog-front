import { LOGIN_SUCCESS, LOGIN_FAIL, LOAD_USER, LOGOUT } from '../constants';

import { requestService } from '../../Services/requestService';
import { requestStart } from './requestActions';

export const login = (data) => async (dispatch) => {
    const onSuccess = (userData) => {
        dispatch({ type: LOGIN_SUCCESS, payload: userData });
        return userData;
    };

    const onError = (error) => {
        dispatch({ type: LOGIN_FAIL, payload: error });
        return error;
    };

    try {
        dispatch(requestStart());
        const result = await requestService(data);
        return onSuccess(result.data);
    } catch (error) {
        return onError(error);
    }
};

export const loadUser = (userData) => ({ type: LOAD_USER, payload: userData });

export const logout = () => ({
    type: LOGOUT,
});
