import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';

import { fetchTrade } from '../../Redux/Actions/tradeActions';
import { selectTrade } from '../../Redux/Reducers/trade';
import { openModal } from '../../Redux/Actions/modalActions';
import LoadingGroup from '../Shared/LoadingGroup';

const TradeDetails = () => {
  const { token } = useSelector(state => state.auth);
  const { tradeId } = useParams();
  const history = useHistory();
  const trade = useSelector(state => selectTrade(state, tradeId) || {});
  const { symbol, outcome, amount, date } = trade;
  const dispatch = useDispatch();

  const openDeleteModal = () => {
    dispatch(openModal('deleteTrade', { trade, token }));
  };

  useEffect(() => {
    if (!trade.symbol) {
      const fetchTradeById = async (token, tradeId) => {
        try {
          const response = await dispatch(
            fetchTrade({
              url: `${process.env.REACT_APP_API}/api/trades/${tradeId}`,
            auth: { Authorization: `Bearer ${token}` },
          }),
          );
          return response;
        } catch (error) {
          console.log(error);
        }
      };
      fetchTradeById(token, tradeId);
    }
  }, [token, tradeId, dispatch]);

  //TODO - Do Edit trade
  return (
    <LoadingGroup>
      <div>
        <h1>TradeDetails</h1>
        <h2>{symbol}</h2>
        <p>{outcome}</p>
        <p>{date && format(new Date(date), 'Mo MMMM, yyyy')}</p>
        <span>{amount}</span>
        <button>Edit Details</button>
        <button
          onClick={() => {
            history.go(-1);
          }}>
          Back
        </button>
        <button onClick={openDeleteModal}>Delete</button>
      </div>
    </LoadingGroup>
  );
};

export default TradeDetails;
