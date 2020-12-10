import {
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER,
    LOGOUT,
} from '../constants';
import { requestService } from '../../Services/requestService';

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
        dispatch({ type: LOGIN_PENDING });
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
