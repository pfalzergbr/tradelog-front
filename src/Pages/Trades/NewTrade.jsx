import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { addTrade } from '../../Services/Requests/tradeRequests';
import LoadingGroup from '../Shared/LoadingGroup';
import TradeForm from './TradeForm';
import { modalAnimation } from '../../Services/Animations/modalTransition';
import { useHistory } from 'react-router-dom';
import { loadAccountStats } from '../../Services/Requests/accountRequests';


const NewTrade = props => {
  const { token } = useSelector(state => state.auth);
  const { accounts } = useSelector(state => state.account);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async data => {
    const response = await addTrade(data, token, dispatch);
    await loadAccountStats(token, dispatch);
    history.push(`/${response.trade.user_id}/accounts/${response.trade.account_id}`)
  };

  return (
    <LoadingGroup>
      <motion.div className='modal' {...modalAnimation}>
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
