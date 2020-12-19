import {GET_TRADES, ADD_TRADE, EDIT_TRADE, DELETE_TRADE} from '../constants'

const initialState = {
    trades: []
}

export const trade = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRADES:
            return {...state, trades: action.payload.trades};
        case ADD_TRADE:
            const trades = [...state.trades, action.payload.newTrade]
            return {...state, trades}
        case EDIT_TRADE:
            return state;
        case DELETE_TRADE:
            return state;
        default:
            return state;
    }
};
