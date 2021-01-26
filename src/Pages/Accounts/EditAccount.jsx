import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import EditAccountForm from './EditAccountForm';
import LoadingGroup from '../Shared/LoadingGroup';
import { editAccount } from '../../Services/Requests/accountRequests';
import Button from '../Shared/ui/Button';

const NewTrade = props => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);

  const onSubmit = async data => {
    const accountId = props.data.account.account_id;
    await editAccount(data, accountId, token, dispatch);
    // history.push(
    //   `/${response.updatedAccount.user_id}/accounts/${response.updatedAccount.account_id}`,
    // );
  };

  return (
    <LoadingGroup>
      <div className='modal'>
        <Button buttonStyle='close' onClick={props.closeModal}>
          x
        </Button>
        <EditAccountForm onSubmit={onSubmit} data={props.data} />
      </div>
    </LoadingGroup>
  );
};

export default NewTrade;
