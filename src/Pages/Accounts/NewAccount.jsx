import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import NewAccountForm from './NewAccountForm';
import { addAccount } from '../../Services/Requests/accountRequests';
import { modalAnimation } from '../../Services/Animations/modalTransition';

const NewAccount = props => {
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async data => {
    const response = await addAccount(data, token, dispatch);
    history.push(`/${response.user_id}/dashboard/${response.account_id}`);
  };

  return (
    <motion.div {...modalAnimation}>
      <NewAccountForm onSubmit={onSubmit} closeModa={props.closeModal} />
    </motion.div>
  );
};

export default NewAccount;
