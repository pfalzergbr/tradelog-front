import React from 'react';
import { useSelector } from 'react-redux';
import { selectAccountStats } from '../../Redux/Reducers/account';
import MenuItemBody from './MenuItemBody';
import MenuItemHeader from './MenuItemHeader';

// TODO - Build the whole menu for the actual app

const MenuItemAccount = ({ item, active, setActive, setFilter, currency }) => {
  const accountStats =
    useSelector(state => selectAccountStats(state, item.account_id)) || {};

  const activate = () => {
    setActive(item.account_id);
    setFilter(null);
  };

  return (
    <div className='menu-item'>
    <MenuItemHeader
    item={item}
    activate={activate}
    active={active}
    currency={currency}
    profitLoss={accountStats.total_pnl}
  />
  <MenuItemBody
  strategy={accountStats}
  item={item}
  active={active}
  currency={currency}
/>
    </div>
  );
};

export default MenuItemAccount;
