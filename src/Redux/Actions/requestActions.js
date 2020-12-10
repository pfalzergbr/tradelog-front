import { REQUEST_START, REQUEST_END } from '../constants';

export const requestStart = () => ({
    type: REQUEST_START,
});

export const requestEnd = () => ({
    type: REQUEST_END,
});
