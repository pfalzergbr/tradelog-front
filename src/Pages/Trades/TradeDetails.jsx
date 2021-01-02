import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Loading from '../Shared/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { selectTrade } from '../../Redux/Reducers/trade';
import { openModal } from '../../Redux/Actions/modalActions';

const TradeDetails = () => {
  const { token } = useSelector(state => state.auth);
  const { isLoading } = useSelector(state => state.control);
  const { tradeId } = useParams();
  const history = useHistory();
  //Todo - implement fetching if there are no trades in redux
  const trade = useSelector(state => selectTrade(state, tradeId) || {});
  const { symbol, outcome, amount } = trade;
  const dispatch = useDispatch();

  const openDeleteModal = () => {
    dispatch(openModal('deleteTrade', { trade, token }));
  };

  return (
    <React.Fragment>
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          <h1>TradeDetails</h1>
          <h2>{symbol}</h2>
          <p>{outcome}</p>
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
      )}
    </React.Fragment>
  );
};

export default TradeDetails;
