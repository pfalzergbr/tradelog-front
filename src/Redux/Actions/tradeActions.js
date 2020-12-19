import { GET_TRADES, ADD_TRADE, EDIT_TRADE, DELETE_TRADE } from '../constants';
import { handleThunk } from '../handleThunk';

const getTrades = (trades) => ({
    type: GET_TRADES,
    payload: {trades}
})

const addTrade = (tradeData) => ({
    type: ADD_TRADE,
    payload: { newTrade: tradeData },
});

const editTrade = (tradeData) => ({
    type: EDIT_TRADE,
    payload: { updatedTrade: tradeData.updatedTrade },
});

const deleteTrade = (tradeData) => ({
    type: DELETE_TRADE,
    payload: { trade_id: tradeData.deletedTrade.trade_id },
});

export const fetchTradesByAccount = (requestData ) => handleThunk(requestData, getTrades);
export const addNewTrade = (requestData) => handleThunk(requestData, addTrade);
export const updateTrade = (requestData) => handleThunk(requestData, editTrade);
export const removeTrade = (requestData) => handleThunk(requestData, deleteTrade);
