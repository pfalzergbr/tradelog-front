import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import StrategyForm from './StrategyForm';
import { newStrategy } from '../../Services/Requests/strategyRequests';

const NewStrategy = props => {
  const { accountId } = props.data;
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onSubmit = async data => {
    await newStrategy(data, accountId, token, dispatch);
    // history.push(
    //   `/${response.strategy.user_id}/strategies/${response.strategy.strategy_id}`,
    // );
  };

  return (
    <div>
      <button onClick={props.closeModal}>X</button>
      <StrategyForm onSubmit={onSubmit} />
    </div>
  );
};

export default NewStrategy;
