import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { addTrade } from '../../Services/Requests/tradeRequests';
import LoadingGroup from '../Shared/LoadingGroup';
import TradeForm from './TradeForm';
import { modalAnimation } from '../../Services/Animations/modalTransition';

const NewTrade = props => {
  const { token } = useSelector(state => state.auth);
  const { accounts } = useSelector(state => state.account);
  const dispatch = useDispatch();

  const onSubmit = async data => {
    addTrade(data, token, dispatch);
  };

  return (
    <LoadingGroup>
      <motion.div {...modalAnimation}>
        <TradeForm
          onSubmit={onSubmit}
          accounts={accounts}
          closeModal={props.closeModal}
        />
      </motion.div>
    </LoadingGroup>
  );
};

export default NewTrade;
