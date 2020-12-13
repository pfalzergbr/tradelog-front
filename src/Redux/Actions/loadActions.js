import { POPULATE_USER } from '../constants';
import { handleThunk } from '../handleThunk';

const populateUserSuccess = (userData) => ({
    type: POPULATE_USER,
    payload: userData,
});

export const loadUserData = (requestData) =>
    handleThunk(requestData, populateUserSuccess);
