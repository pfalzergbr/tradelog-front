import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../Redux/Actions/modalActions';
import { motion } from 'framer-motion';

import { loadAccountStats } from '../../Services/Requests/accountRequests';

import AccountCardList from './AccountCardList';
import LoadingGroup from '../Shared/LoadingGroup';
import AccountsHeader from './AccountsHeader';
import { routeAnimation } from '../../Services/Animations/routeTransition';

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
      <motion.div className='accounts' {...routeAnimation}>
        <AccountsHeader
          userName={user.userName}
          openNewAccountModal={openNewAccountModal}
        />
        <AccountCardList accounts={accounts} user={user} />
      </motion.div>
    </LoadingGroup>
  );
};

export default Dashboard;
