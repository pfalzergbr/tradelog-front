import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import StrategyForm from './StrategyForm';
import { newStrategy } from '../../Services/Requests/strategyRequests';

import {
  modalAnimation
} from '../../Services/Animations/modalTransition';

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
    <motion.div {...modalAnimation}>
      <button onClick={props.closeModal}>X</button>
      <StrategyForm onSubmit={onSubmit} />
    </motion.div>
  );
};

export default NewStrategy;
