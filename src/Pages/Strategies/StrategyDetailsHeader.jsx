import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../Redux/Actions/modalActions';
import { selectStrategy } from '../../Redux/Reducers/strategy';

const StrategyDetailsHeader = ({ currentStrategy }) => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);
  const strategy = useSelector(
    (state => selectStrategy(state, currentStrategy)) || {},
  );

  const openDeleteModal = () => {
    dispatch(openModal('deleteStrategy', { strategy, token }));
  };

  const openEditModal = () => {
    dispatch(openModal('editStrategy', { strategy, token }));
  };

  return (
    <React.Fragment>
      {strategy ? (
        <div className='page-header page-header--details'>
          <div className='page-header__title-container'>
            <h3 className='page-header__title'>{strategy.strategy_name}</h3>
            <h4 className='page-header__value'>No strategy selected</h4>
          </div>
          <p className='page-header__paragraph'>
            Select your account to show all trades
          </p>
          <div className='page-header__button-container'>
            <button className='btn btn--primary'>New Trade</button>
            <button className='btn btn--secondary' onClick={openEditModal}>Edit Strategy</button>
            <button className='btn btn--secondary' onClick={openDeleteModal}>Delete Strategy</button>
          </div>
        </div>
      ) : (
        <div className='page-header page-header--details'>
          <div className='page-header__title-container'>
            <h3 className='page-header__title'>All trades</h3>
            <h4 className='page-header__value'>No strategy selected</h4>
          </div>
          <p className='page-header__paragraph'>
            Select a strategy on the side menu to filter your trades
          </p>
          <div className='page-header__button-container'>
            <button className='btn btn--primary'>New Trade</button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default StrategyDetailsHeader;
