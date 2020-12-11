import { ADD_STRATEGY, POPULATE_USER } from '../constants';

const initialState = { strategies: [] };

export const strategy = (state = initialState, action = {}) => {
    switch (action.type) {
        case POPULATE_USER:
            return { ...state, strategies: action.payload.strategies };
        case ADD_STRATEGY:
            return { ...state, strategies: action.payload.strategies };
        default:
            return state;
    }
};
