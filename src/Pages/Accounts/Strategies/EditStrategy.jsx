import React from 'react';
import { useDispatch } from 'react-redux';

import StrategyForm from './StrategyForm';
import { editStrategy } from '../../../Services/Requests/strategyRequests';

const NewStrategy = props => {
  const { strategy, token } = props.data;
  const dispatch = useDispatch();

  const onSubmit = async data => {
    await editStrategy(data, strategy.strategy_id, token, dispatch);
    // history.push(
    //   `/${response.strategy.user_id}/strategies/${response.strategy.strategy_id}`,
    // );
  };

  return (
    <div>
      <button onClick={props.closeModal}>X</button>
      <StrategyForm
        strategyData={strategy}
        button='Edit Strategy'
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default NewStrategy;
