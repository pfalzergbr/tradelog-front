import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import EditAccountForm from './EditAccountForm';
import { updateAccount } from '../../Redux/Actions/accountActions';
import LoadingGroup from '../Shared/LoadingGroup';

const NewTrade = props => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);
  const history = useHistory();

  console.log(props);

  const onSubmit = async data => {
    try {
      const response = await dispatch(
        updateAccount({
          method: 'patch',
          url: `${process.env.REACT_APP_API}/api/account/${props.data.account.account_id}`,
          data,
          auth: { Authorization: `Bearer ${token}` },
        }),
      );
      history.push(
        `/${response.updatedAccount.user_id}/accounts/${response.updatedAccount.account_id}`,
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoadingGroup>
      <div>
        <button onClick={props.closeModal}>X</button>
        <EditAccountForm onSubmit={onSubmit} data={props.data} />
      </div>
    </LoadingGroup>
  );
};

export default NewTrade;
