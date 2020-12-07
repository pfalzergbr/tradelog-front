import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './constants';
const API = process.env.REACT_APP_API;

export const login = () => async (dispatch) => {
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
        const result = await axios.get(`${API}/api/user/login`);
        return onSuccess(result.data);
    } catch (error) {
        return onError(error);
    }
};

export const logout = () => ({
    type: LOGOUT,
});
