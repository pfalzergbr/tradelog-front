import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../Redux/Actions/modalActions';

import Loading from '../Shared/Loading';
import { fetchAccountStats } from '../../Redux/Actions/accountActions';
import AccountCardList from './AccountCardList';

const Accounts = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector(state => state.auth);
  const { accountStats } = useSelector(state => state.account);
  const { isLoading } = useSelector(state => state.control);
  const openNewAccountModal = () => {
    dispatch(openModal('newAccount', {}));
  };

  useEffect(() => {
    const loadAccountStats = async token => {
      try {
        const response = await dispatch(
          fetchAccountStats({
            url: `${process.env.REACT_APP_API}/api/account/stats`,
            auth: { Authorization: `Bearer ${token}` },
          }),
        );
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    loadAccountStats(token);
  }, [dispatch, token]);

  return (
    <React.Fragment>
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          <h1>Accounts of {user.userName}</h1>
          <AccountCardList accountStats={accountStats} user={user} />

          <button onClick={openNewAccountModal}>Create Account</button>
        </div>
      )}
    </React.Fragment>
  );
};

export default Accounts;
