import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import NewAccountForm from './NewAccountForm';
import { addAccount } from '../../Services/Requests/accountRequests';


const NewAccount = props => {
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onSubmit = async data => {
    addAccount(data, token, dispatch);
    // history.push(`/${response.user_id}/accounts/${response.account_id}`);
  };

  return (

      <div>
        <NewAccountForm onSubmit={onSubmit} closeModa={props.closeModal}/>
      </div>
  );
};

export default NewAccount;
