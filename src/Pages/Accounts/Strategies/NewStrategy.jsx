import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import StrategyForm from './StrategyForm';
import { addNewStrategy } from '../../../Redux/Actions/strategyActions';
import Loading from '../../Shared/Loading';
import { useHistory } from 'react-router-dom';

const NewStrategy = props => {
  const { accountId } = props.data;
  const { token } = useSelector(state => state.auth);
  const { isLoading } = useSelector(state => state.control);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async data => {
    try {
      const newStrategyData = {
        ...data,
        accountId,
      };
      const response = await dispatch(
        addNewStrategy({
          method: 'post',
          url: `${process.env.REACT_APP_API}/api/strategy`,
          data: newStrategyData,
          auth: { Authorization: `Bearer ${token}` },
        }),
      );
      history.push(
        `/${response.strategy.user_id}/strategies/${response.strategy.strategy_id}`,
      );
      return response;
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
          <StrategyForm onSubmit={onSubmit} />
        </div>
      )}
    </React.Fragment>
  );
};

export default NewStrategy;
