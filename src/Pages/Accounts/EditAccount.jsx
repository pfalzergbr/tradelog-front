import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import EditAccountForm from './EditAccountForm';
import LoadingGroup from '../Shared/LoadingGroup';
import { editAccount } from '../../Services/Requests/accountRequests';
import Button from '../Shared/ui/Button';
import { modalAnimation } from '../../Services/Animations/modalTransition';

const NewTrade = props => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);

  const onSubmit = async data => {
    const accountId = props.data.account.account_id;
    await editAccount(data, accountId, token, dispatch);
  };

  return (
    <LoadingGroup>
      <motion.div className='modal' {...modalAnimation}>
        <Button buttonStyle='close' onClick={props.closeModal}>
          x
        </Button>
        <EditAccountForm onSubmit={onSubmit} data={props.data} />
      </motion.div>
    </LoadingGroup>
  );
};

export default NewTrade;
