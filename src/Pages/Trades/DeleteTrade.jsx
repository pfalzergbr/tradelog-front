import React, { useState } from 'react';
import { removeTrade } from '../../Redux/Actions/tradeActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const DeleteTrade = props => {
  const { closeModal, data } = props;
  const { trade_id, user_id, symbol } = data.trade;
  const { token } = data;
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = event => {
    setIsChecked(event.target.checked);
  };

  console.log(data.trade);


  const handleDelete = async () => {
    try {
      history.replace(`/${user_id}/accounts/`);
      const response = await dispatch(
        removeTrade({
          method: 'delete',
          url: `${process.env.REACT_APP_API}/api/trades/${trade_id}`,
          auth: { Authorization: `Bearer ${token}` },
        }),
      );
      closeModal();
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={closeModal}>X</button>
      <h1>{`You are trying to delete your ${symbol} Trade.`}</h1>
      <p>
        ' Please only delete the trade if you had an input mistake. Deleting
        trades from your record changes your statistics, and distorts your real
        performance.'
      </p>
      <p>Note: You cannot reverse this action once you deleted the trade.</p>
      <form action=''>
        <label htmlFor='confirm-delete'>
        Yes, I want to delete this trade
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

export default DeleteTrade;
