import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';

import { selectTrade } from '../../Redux/Reducers/trade';
import { openModal } from '../../Redux/Actions/modalActions';
import LoadingGroup from '../Shared/LoadingGroup';
import { fetchTradeById } from '../../Services/Requests/tradeRequests';
import Button from '../Shared/ui/Button';
import { setItemColor } from '../../Services/Requests/setColorService';

const TradeDetails = () => {
  const { token } = useSelector(state => state.auth);
  const { tradeId } = useParams();
  const history = useHistory();
  const trade = useSelector(state => selectTrade(state, tradeId) || {});
  const { symbol, outcome, amount, date, strategy_name, relative_gain, currency_symbol } = trade;
  const dispatch = useDispatch();

  const openDeleteModal = () => {
    dispatch(openModal('deleteTrade', { trade, token }));
  };

  useEffect(() => {
    if (!trade.symbol) {
      fetchTradeById(token, tradeId, dispatch, trade.symbol);
    }
  }, [token, tradeId, dispatch, trade.symbol]);

  const color = setItemColor(outcome);

  //TODO - Do Edit trade
  return (
    <LoadingGroup>
      <div className='trade-details'>
        <div className='trade-details__header'>
          <div className='trade-details__header-container'>
            <p className='trade-details__date'>
              {date && format(new Date(date), 'Mo MMMM, yyyy')}
            </p>
            <h3 className='trade-details__symbol'>{symbol}</h3>
          </div>
          <div className='trade-details__stats'>
            <p className='trade-details__stats-title'>Relative Gain</p>
            <h3 className={`trade-details__stats-value ${color}`}>{relative_gain} %</h3>
          </div>
        </div>
        <div className='trade-details__body'>
          <div className='trade-details__stats'>
            <p className='trade-details__stats-title'>{outcome}</p>
            <h3 className={`trade-details__stats-value ${color}`}>{amount} {currency_symbol}</h3>
          </div>

        </div>
        <div className='trade-details__buttons buttons-container'>
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
