import { requestStart, requestFail } from './Actions/requestActions';
import { requestService } from '../Services/requestService';

export const handleThunk = (requestData, successHandler) => async (dispatch) => {
    const onSuccess = (data) => {
        dispatch(successHandler(data));
        return data;
    };

    const onError = (error) => {
        dispatch(requestFail(error));
        return error;
    };

    try {
        dispatch(requestStart());
        const response = await requestService(requestData);
        const data = response.data;
        return onSuccess(data);
    } catch (error) {
        return onError(error);
    }
};
