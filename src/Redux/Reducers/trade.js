import { GET_TRADES, ADD_TRADE, EDIT_TRADE, DELETE_TRADE } from '../constants';

const initialState = {
  trades: [],
};

export const trade = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRADES:
      return { ...state, trades: action.payload.trades };
    case ADD_TRADE:
      const trades = [...state.trades, action.payload.newTrade];
      return { ...state, trades };
    case EDIT_TRADE:
      return state;
    case DELETE_TRADE:
        const filteredTrades = state.trades.filter(trade => trade.trade_id !== action.payload.trade_id)
      return {...state, trades: filteredTrades};
    default:
      return state;
  }
};

export const selectTrade = (state, tradeId) => {
  return state.trade.trades.find(trade => trade.trade_id === tradeId);
};
