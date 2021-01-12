import React from 'react';
import { useDispatch } from 'react-redux';

import StrategyForm from './StrategyForm';
import { updateStrategy } from '../../../Redux/Actions/strategyActions';
import { useHistory } from 'react-router-dom';

const NewStrategy = props => {
  const { strategy, token } = props.data;
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async data => {
    try {
      const response = await dispatch(
        updateStrategy({
          method: 'patch',
          url: `${process.env.REACT_APP_API}/api/strategy/${strategy.strategy_id}`,
          data: data,
          auth: { Authorization: `Bearer ${token}` },
        }),
      );
      history.push(
        `/${response.strategy.user_id}/strategies/${response.strategy.strategy_id}`,
      );
      return response;
    } catch (error) {
      console.log(error);
    }
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
