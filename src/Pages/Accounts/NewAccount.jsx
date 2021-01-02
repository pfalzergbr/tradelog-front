import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import NewAccountForm from './NewAccountForm';
import { addNewAccount } from '../../Redux/Actions/accountActions';
import Loading from '../Shared/Loading';

const NewAccount = props => {
  const { token } = useSelector(state => state.auth);
  const { isLoading } = useSelector(state => state.control);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async data => {
    try {
      const response = await dispatch(
        addNewAccount({
          method: 'post',
          url: `${process.env.REACT_APP_API}/api/account`,
          data,
          auth: { Authorization: `Bearer ${token}` },
        }),
      );
      history.push(`/${response.user_id}/accounts/${response.account_id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          <button onClick={props.closeModal}>X</button>
          <NewAccountForm onSubmit={onSubmit} />
        </div>
      )}
    </React.Fragment>
  );
};

export default NewAccount;
