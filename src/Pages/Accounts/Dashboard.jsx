import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../Redux/Actions/modalActions';

import { loadAccountStats } from '../../Services/Requests/accountRequests';

import AccountCardList from './AccountCardList';
import LoadingGroup from '../Shared/LoadingGroup';
import AccountsHeader from './AccountsHeader';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector(state => state.auth);
  const { accounts } = useSelector(state => state.account);
  const openNewAccountModal = () => {
    dispatch(openModal('newAccount', {}));
  };

  useEffect(() => {
    loadAccountStats(token, dispatch);
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

export default Dashboard;
