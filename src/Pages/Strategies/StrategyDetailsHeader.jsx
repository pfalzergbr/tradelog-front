import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../Redux/Actions/modalActions';
import { selectStrategy } from '../../Redux/Reducers/strategy';
import { AnimatePresence, motion } from 'framer-motion';

import Button from '../Shared/ui/Button';
import { cardAnimation } from '../../Services/Animations/cardTransition';

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

  const openTradeModal = () => {
    dispatch(openModal('newTrade', {}));
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {strategy ? (
        <motion.div
          className='page-header page-header--details'
          key={strategy.strategy_id}
          {...cardAnimation}>
          <div className='page-header__title-container'>
            <h3 className='page-header__title'>{strategy.strategy_name}</h3>
          </div>
          <p className='page-header__paragraph'>
            Select your account to show all trades
          </p>
          <div className='page-header__button-container'>
            <Button buttonStyle='primary' onClick={openTradeModal}>
              New Trade
            </Button>

            {!strategy.is_default && (
              <React.Fragment>
                <Button buttonStyle='' onClick={openEditModal}>
                  Edit Strategy
                </Button>
                <Button buttonStyle='' onClick={openDeleteModal}>
                  Delete Strategy
                </Button>
              </React.Fragment>
            )}
          </div>
        </motion.div>
      ) : (
        <motion.div
          className='page-header page-header--details'
          key='no-strategy'
          {...cardAnimation}>
          <div className='page-header__title-container'>
            <h3 className='page-header__title'>All trades</h3>
            <h4 className='page-header__value'>No strategy selected</h4>
          </div>
          <p className='page-header__paragraph'>
            Select a strategy on the side menu to filter your trades
          </p>
          <div className='page-header__button-container'>
            <Button buttonStyle='primary' onClick={openTradeModal}>New Trade</Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StrategyDetailsHeader;
