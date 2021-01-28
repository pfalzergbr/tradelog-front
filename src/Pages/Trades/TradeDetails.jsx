import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';

import { selectTrade } from '../../Redux/Reducers/trade';
import { openModal } from '../../Redux/Actions/modalActions';
import LoadingGroup from '../Shared/LoadingGroup';
import { fetchTradeById } from '../../Services/Requests/tradeRequests';
import Button from '../Shared/ui/Button';

const TradeDetails = () => {
  const { token } = useSelector(state => state.auth);
  const { tradeId } = useParams();
  const history = useHistory();
  const trade = useSelector(state => selectTrade(state, tradeId) || {});
  const { symbol, outcome, amount, date, strategy_name } = trade;
  const dispatch = useDispatch();

  const openDeleteModal = () => {
    dispatch(openModal('deleteTrade', { trade, token }));
  };

  useEffect(() => {
    if (!trade.symbol) {
      fetchTradeById(token, tradeId, dispatch, trade.symbol);
    }
  }, [token, tradeId, dispatch, trade.symbol]);

  //TODO - Do Edit trade
  return (
    <LoadingGroup>
      <div className='trade-details'>
        <div className='trade-details__header'>
          <p className='trade-details__date'>
            {date && format(new Date(date), 'Mo MMMM, yyyy')}
          </p>
          <h2 className='trade-details__symbol'>{symbol}</h2>
        </div>
        <div className='trade-details__body'>
        <p className="trade-details__strategy">{strategy_name}</p>
          <p className='trade-details__outcome'>{outcome}</p>
          <p className='trade-details__amount'>{amount}</p>
        </div>
        <div className='buttons-container'>
          <Button
            buttonStyle='outline'
            onClick={() => {
              history.go(-1);
            }}>
            Back
          </Button>
          <Button onClick={openDeleteModal}>Delete</Button>
        </div>
      </div>
    </LoadingGroup>
  );
};

export default TradeDetails;
