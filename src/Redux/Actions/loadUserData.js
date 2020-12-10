import { requestService } from '../../Services/requestService';
import { loadStrategies } from './strategyActions'
import { loadAccounts, loadAccountsFail } from './accountActions'
import { requestStart, requestEnd} from './requestActions'

export const loadUserData = (data) => async (dispatch) => {
    const onSuccess = (userData) => {
        dispatch(loadAccounts(userData));
        dispatch(loadStrategies(userData));
        dispatch(requestEnd());
        return userData;
    };

    const onError = (error) => {
        dispatch(loadAccountsFail());
        dispatch(requestEnd());
        return error;
    };
    try {
        dispatch(requestStart())
        const result = await requestService(data)
        return onSuccess(result.data);

    } catch (error) {
        return onError(error);
    }
};