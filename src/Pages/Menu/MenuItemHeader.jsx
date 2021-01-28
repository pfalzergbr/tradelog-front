import React from 'react';
import { Icon } from '@iconify/react';
import bxChevronDown from '@iconify/icons-bx/bx-chevron-down';

import StatContainer from '../Accounts/AccountCard/StatContainer';

const MenuItemHeader = ({activate, active, currency, item, profitLoss}) => {
  const itemId = item.strategy_id || item.account_id


  return ( <div
    className={`accordion-heading ${
      active === itemId
        ? 'accordion-heading--active'
        : 'accordion-heading-inactive'
    }`}
    onClick={activate}>
    <StatContainer
      text={item.strategy_name || `Account - ${item.account_name}`}
      value={profitLoss}
      type='amount'
      variant='accordion-heading'
      containerClass='item-container'
      currency={currency}
    />
    <Icon
      icon={bxChevronDown}
      className={`accordion-heading__chevron ${active === itemId ? 'accordion-heading__chevron--active': 'accordion-heading__chevron--inactive'}`}
      style={{
        fontSize: '18px',
        opacity: `${1}`,
      }}
      vFlip={false}
    />
  </div> );
}
 
export default MenuItemHeader;