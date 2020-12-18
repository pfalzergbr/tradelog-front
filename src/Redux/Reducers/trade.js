import {GET_TRADES, ADD_TRADE, EDIT_TRADE, DELETE_TRADE} from '../constants'

export const trade = (state, action) => {
    switch (action.type) {
        case GET_TRADES:
            return state;
        case ADD_TRADE:
            return state;
        case EDIT_TRADE:
            return state;
        case DELETE_TRADE:
            return state;
        default:
            return state;
    }
};
