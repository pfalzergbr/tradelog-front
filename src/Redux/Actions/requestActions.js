import { REQUEST_START, REQUEST_FAIL } from '../constants';

export const requestStart = () => ({
    type: REQUEST_START,
});

export const requestFail = (error) => ({
    type: REQUEST_FAIL,
    payload: error
});
