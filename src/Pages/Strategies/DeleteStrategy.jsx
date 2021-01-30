import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { deleteStrategy } from '../../Services/Requests/strategyRequests';
import Button from '../Shared/ui/Button';
import { modalAnimation } from '../../Services/Animations/modalTransition';

const DeleteStrategy = props => {
  const { closeModal, data } = props;
  const {
    strategy_id: strategyId,
    strategy_name,
    user_id,
    account_id,
  } = data.strategy;
  const { token } = data;
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = event => {
    setIsChecked(event.target.checked);
  };

  const handleDelete = async () => {
    await deleteStrategy(strategyId, token, dispatch);
    history.replace(`/${user_id}/accounts/${account_id}`);
    closeModal();
  };

  return (
    <motion.div className='modal' {...modalAnimation}>
      <Button buttonStyle='close' onClick={closeModal}>
        x
      </Button>
      <div className='modal-body'>
        <h3 className='modal__title'>{`You are trying to delete your ${strategy_name} Strategy.`}</h3>
        <p className='modal__paragraph'>
          You are trying to delete this strategy. Once it is deleted, this
          action cannot be reversed. All trades associated with this account
          will be permanently deleted.
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
            Yes, I am sure I want to delete this strategy
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
    </motion.div>
  );
};

export default DeleteStrategy;
