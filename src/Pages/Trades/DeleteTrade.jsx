import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteTrade } from '../../Services/Requests/tradeRequests';
import { motion } from 'framer-motion';

import Button from '../Shared/ui/Button';
import { modalAnimation } from '../../Services/Animations/modalTransition';

const DeleteTrade = props => {
  const { closeModal, data } = props;
  const { trade_id: tradeId, user_id, account_id, symbol } = data.trade;
  const { token } = data;
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = event => {
    setIsChecked(event.target.checked);
  };

  const handleDelete = async () => {
    await deleteTrade(tradeId, token, dispatch);
    closeModal();
    history.replace(`/${user_id}/accounts/${account_id}`);
  };

  return (
    <motion.div className='modal' {...modalAnimation}>
      <div className='modal__container'>
        <div className='modal-body'>
          <h3 className='modal__title'>{`You are trying to delete your ${symbol} Trade`}</h3>
          <p className='modal__paragraph'>
            Please only delete the trade if you had an input mistake. Deleting
            trades from your record changes your statistics, and distorts your
            real performance.
          </p>
          <p className='modal__paragraph'>
            Note: You cannot reverse this action once you deleted the trade.
          </p>
          <form className='form-control form-control--checkbox modal__checkbox'>
            <input
              className='form__input form__input--checkbox'
              type='checkbox'
              id='confirm-delete'
              checked={isChecked}
              onChange={handleChange}
            />
            <label htmlFor='confirm-delete'>
              Yes, I want to delete this trade
            </label>
          </form>
        </div>
        <div className='buttons-container'>
          <Button
            buttonStyle='danger'
            onClick={handleDelete}
            disabled={!isChecked}>
            Delete
          </Button>
          <Button onClick={closeModal}>Cancel</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default DeleteTrade;
