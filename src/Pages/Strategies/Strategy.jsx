import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { openModal } from '../../Redux/Actions/modalActions';
import { selectStrategy } from '../../Redux/Reducers/strategy';

import TradeList from '../Trades/Table/TradeList';
import LoadingGroup from '../Shared/LoadingGroup';
import { fetchTradesByStrategy } from '../../Services/Requests/tradeRequests';

const Strategy = () => {
  const { strategyId } = useParams();
  const { token } = useSelector(state => state.auth);
  const strategy =
    useSelector(state => selectStrategy(state, strategyId)) || {};
  const { trades } = useSelector(state => state.trade);
  const { strategy_name, description } = strategy;

  const dispatch = useDispatch();

  const openDeleteModal = () => {
    dispatch(openModal('deleteStrategy', { strategy, token }));
  };

  const openEditModal = () => {
    dispatch(openModal('editStrategy', { strategy, token }));
  };

  useEffect(() => {
    if (strategy) {
      fetchTradesByStrategy(token, strategy, dispatch);
    }
  }, [token, strategy, dispatch]);

  return (
    <LoadingGroup>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h1>{strategy_name}</h1>
          <p>{description}</p>
          <div>
            <button onClick={openEditModal}>Edit Strategy</button>
            <button onClick={openDeleteModal}>Delete Strategy</button>
          </div>
        </div>
        <TradeList trades={trades} />
      </div>
    </LoadingGroup>
  );
};

export default Strategy;
