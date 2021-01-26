import React, { useState } from 'react';
import Button from '../Shared/ui/Button';
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
    <div className='modal'>
      <button className='btn--close' onClick={closeModal}>
        X
      </button>
      <div className='modal__body'>
        <h3 className='modal__title'>{`You are trying to delete your ${account_name} account.`}</h3>
        <p className='modal__paragraph'>
          You are trying to delete this account. Once it is deleted, this action
          cannot be reversed. All trades associated with this account will be
          permanently deleted.
        </p>
        <form className='form-control form-control--checkbox modal__checkbox'>
          <input
            className={`form__input form__input--checkbox`}
            type='checkbox'
            id='confirm-delete'
            checked={isChecked}
            onChange={handleChange}
          />
          <label htmlFor='confirm-delete'>
            Yes, I am sure I want to delete this account
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
  );
};

export default DeleteAccount;
