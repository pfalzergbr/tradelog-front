import React from 'react';
import { useDispatch } from 'react-redux';

import StrategyForm from './StrategyForm';
import { editStrategy } from '../../Services/Requests/strategyRequests';
import { motion } from 'framer-motion';
import { modalAnimation } from '../../Services/Animations/modalTransition';

const NewStrategy = props => {
  const { strategy, token } = props.data;
  const dispatch = useDispatch();

  const onSubmit = async data => {
    await editStrategy(data, strategy.strategy_id, token, dispatch);
  };

  return (
    <motion.div {...modalAnimation}>
      <button onClick={props.closeModal}>X</button>
      <StrategyForm
        strategyData={strategy}
        button='Edit Strategy'
        onSubmit={onSubmit}
      />
    </motion.div>
  );
};

export default NewStrategy;
