import React, { useState } from 'react';
import { removeStrategy } from '../../../Redux/Actions/strategyActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteStrategy } from '../../../Services/Requests/strategyRequests';

const DeleteStrategy = props => {
  const { closeModal, data } = props;
  const { strategy_id: strategyId, strategy_name, user_id, account_id } = data.strategy;
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
    <div>
      <button onClick={closeModal}>X</button>
      <h1>{`You are trying to delete your ${strategy_name} Strategy.`}</h1>
      <p>
        You are trying to delete this strategy. Once it is deleted, this action
        cannot be reversed. All trades associated with this account will be
        permanently deleted.
      </p>
      <form action=''>
        <label htmlFor='confirm-delete'>
          Yes, I am sure I want to delete this strategy
        </label>
        <input
          type='checkbox'
          id='confirm-delete'
          checked={isChecked}
          onChange={handleChange}
        />
      </form>
      <button disabled={!isChecked} onClick={handleDelete}>
        Delete
      </button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};

export default DeleteStrategy;
