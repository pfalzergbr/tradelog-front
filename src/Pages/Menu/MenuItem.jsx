import React from 'react';
import { useSelector } from 'react-redux';
import { selectStrategyStat } from '../../Redux/Reducers/strategy';
import { AnimatePresence } from 'framer-motion';
import MenuItemBody from './MenuItemBody';
import MenuItemHeader from './MenuItemHeader';

// TODO - Refactor - Extract smaller components, Header and body

const MenuItem = ({ item, active, setActive, setFilter, currency }) => {
  const strategyStats =
    useSelector(state => selectStrategyStat(state, item.strategy_id)) || {};

  const activate = () => {
    setActive(item.strategy_id);
    setFilter(item.strategy_id);
  };

  return (
    <div className='menu-item'>
      <MenuItemHeader
        item={item}
        activate={activate}
        active={active}
        currency={currency}
        profitLoss={strategyStats.total_pnl}
      />
      <AnimatePresence itinial={false}>
        <MenuItemBody
          strategy={strategyStats}
          item={item}
          active={active}
          currency={currency}
        />
      </AnimatePresence>
    </div>
  );
};

export default MenuItem;
