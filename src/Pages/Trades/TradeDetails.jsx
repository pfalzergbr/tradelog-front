import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';

import { selectTrade } from '../../Redux/Reducers/trade';
import { openModal } from '../../Redux/Actions/modalActions';
import LoadingGroup from '../Shared/LoadingGroup';
import { editTrade, fetchTradeById } from '../../Services/Requests/tradeRequests';
import Button from '../Shared/ui/Button';
import { setItemColor } from '../../Services/Requests/setColorService';
import ChangeStrategy from './EditTrade/ChangeStrategy';
import { selectStrategy } from '../../Redux/Reducers/strategy';

const TradeDetails = () => {
  const [isChangingStrategy, setIsChangingStrategy] = useState(false);
  const { token } = useSelector(state => state.auth);
  const { tradeId } = useParams();
  const history = useHistory();
  const trade = useSelector(state => selectTrade(state, tradeId) || {});
  const {
    symbol,
    outcome,
    amount,
    date,
    // strategy_name,
    relative_gain,
    currency_symbol,
    strategy_id,
    account_id,
  } = trade;
  const { strategy_name } = useSelector(state => selectStrategy(state, strategy_id) || {})
  const dispatch = useDispatch();
  const color = setItemColor(outcome);

  const openDeleteModal = () => {
    dispatch(openModal('deleteTrade', { trade, token }));
  };

  const onSubmitStrategy = async data => {
    editTrade(data, token, tradeId, dispatch)
    setIsChangingStrategy(false);
  };

  const toggleChangeStrategy = () => {
    setIsChangingStrategy(!isChangingStrategy);
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
        <div className='trade-details__header-container'>
          <p className='trade-details__date'>
            {date && format(new Date(date), 'Mo MMMM, yyyy')}
          </p>
          <h2 className='trade-details__symbol'>{symbol}</h2>
        </div>
        <div className='trade-details__stats trade-details__stats--outcome'>
          <p className='trade-details__stats-title'>{outcome}</p>
          <h3 className={`trade-details__stats-value ${color}`}>
            {amount} {currency_symbol}
          </h3>
        </div>
        <div className='trade-details__stats trade-details__stats--relative-gain'>
          <p className='trade-details__stats-title'>Relative Gain</p>
          <h3 className={`trade-details__stats-value ${color}`}>
            {relative_gain} %
          </h3>
        </div>
        <div className='trade-details__strategy'>
          <div className='trade-details__title-container trade-details__title-container--strategy'>
            <p className='trade-details__stats-title'>Strategy</p>
            {isChangingStrategy ? (
              <Button buttonStyle='small-link' onClick={toggleChangeStrategy}>
                Cancel
              </Button>
            ) : (
              <Button buttonStyle='small-link' onClick={toggleChangeStrategy}>
                Change Strategy
              </Button>
            )}
          </div>
          {isChangingStrategy ? (
            <ChangeStrategy
              accountId={account_id}
              strategyId={strategy_id}
              onSubmit={onSubmitStrategy}
            />
          ) : (
            <div>
              <h3 className='trade-details__stats-title trade-details__stats-title--strategy'>{strategy_name}</h3>
            </div>
          )}
        </div>
        )
        <div className='trade-details__notes'>
          <div className='trade-details__title-container'>
            <p className='trade-details__stats-title'>Notes</p>
            <Button buttonStyle='small-link'>Edit Notes</Button>
          </div>
          <p className='trade-details__paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            consectetur cum consequuntur? Itaque eius dolorem ad harum
            distinctio beatae nisi, dignissimos optio ab. Ad, explicabo! Et
            eaque a harum accusamus.{' '}
          </p>
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
