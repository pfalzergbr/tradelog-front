import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteAccount } from '../../Services/Requests/accountRequests';

const DeleteAccount = props => {
  const { closeModal, data } = props;
  const { account_id: accountId, user_id: userId, account_name } = data.account;
  const { token } = data;
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = event => {
    setIsChecked(event.target.checked);
  };
  const handleDelete = async () => {
    await deleteAccount(accountId, token, dispatch);
    history.replace(`/${userId}/accounts/`);
    closeModal();
  };

  return (
    <div>
      <button onClick={closeModal}>X</button>
      <h1>{`You are trying to delete your ${account_name} account.`}</h1>
      <p>
        You are trying to delete this account. Once it is deleted, this action
        cannot be reversed. All trades associated with this account will be
        permanently deleted.
      </p>
      <form action=''>
        <label htmlFor='confirm-delete'>
          Yes, I am sure I want to delete this account
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

export default DeleteAccount;
