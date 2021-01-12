import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../Redux/Actions/modalActions';

import { fetchAccountStats } from '../../Redux/Actions/accountActions';
import AccountCardList from './AccountCardList';
import LoadingGroup from '../Shared/LoadingGroup';
import AccountsHeader from './AccountsHeader';

const Accounts = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector(state => state.auth);
  const { accounts } = useSelector(state => state.account);
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
    <LoadingGroup>
      <div className='accounts'>
        <AccountsHeader
          userName={user.userName}
          openNewAccountModal={openNewAccountModal}
        />
        <AccountCardList accounts={accounts} user={user} />
      </div>
    </LoadingGroup>
  );
};

export default Accounts;
