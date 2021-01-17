import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTrade } from '../../Services/Requests/tradeRequests';
import LoadingGroup from '../Shared/LoadingGroup';
import TradeForm from './TradeForm';

const NewTrade = props => {
  //TODO: Basic form, or extended?

  const { token } = useSelector(state => state.auth);

  const { accounts } = useSelector(state => state.account);
  const dispatch = useDispatch();

  const onSubmit = async data => {
    addTrade(data, token, dispatch);
  };

  return (
    <LoadingGroup>
      <div>
        <TradeForm onSubmit={onSubmit} accounts={accounts} closeModal={props.closeModal}/>
      </div>
    </LoadingGroup>
  );
};

export default NewTrade;
