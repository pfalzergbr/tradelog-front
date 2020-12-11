import { POPULATE_USER, POPULATE_USER_FAIL } from '../constants';
import { requestService } from '../../Services/requestService';
import { requestStart } from './requestActions'

const populateUserSuccess = (userData) => ({
    type: POPULATE_USER, 
    payload: userData
})

const populateUserFail = (error) => ({
    type: POPULATE_USER_FAIL,
    payload: error
})


export const loadUserData = (requestData) => async (dispatch) => {
    const onSuccess = (userData) => {
        dispatch(populateUserSuccess(userData));
        return userData;
    };

    const onError = (error) => {
        dispatch(populateUserFail(error));
        return error;
    };
    try {
        dispatch(requestStart())
        const result = await requestService(requestData)
        return onSuccess(result.data);

    } catch (error) {
        return onError(error);
    }
};


