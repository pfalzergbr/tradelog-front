import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addNewTrade } from '../../Redux/Actions/tradeActions';
import Loading from '../Shared/Loading';
import TradeForm from './TradeForm';

const NewTrade = props => {
  //TODO: Basic form, or extended?
  const history = useHistory();
  const { token } = useSelector(state => state.auth);
  const { isLoading } = useSelector(state => state.control);
  const { accounts } = useSelector(state => state.account);
  const dispatch = useDispatch();

  const onSubmit = async data => {
    const tradeData = data;

    try {
      const response = await dispatch(
        addNewTrade({
          method: 'post',
          url: `${process.env.REACT_APP_API}/api/trades`,
          data: tradeData,
          auth: { Authorization: `Bearer ${token}` },
        }),
      );
      history.push(`/${response.trade.user_id}/accounts`);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          <button onClick={props.closeModal}>X</button>
          <TradeForm onSubmit={onSubmit} accounts={accounts} />
        </div>
      )}
    </React.Fragment>
  );
};

export default NewTrade;
