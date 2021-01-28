import React from 'react';
import { Icon } from '@iconify/react';
import bxChevronDown from '@iconify/icons-bx/bx-chevron-down';

import StatContainer from '../Accounts/AccountCard/StatContainer';

const MenuItemHeader = ({activate, active, currency, item, profitLoss}) => {

  return ( <div
    className={`accordion-heading ${
      active === item.strategy_id
        ? 'accordion-heading--active'
        : 'accordion-heading-inactive'
    }`}
    onClick={activate}>
    <StatContainer
      text={item.strategy_name}
      value={profitLoss}
      type='amount'
      variant='accordion-heading'
      containerClass='item-container'
      currency={currency}
    />
    <Icon
      icon={bxChevronDown}
      className={`accordion-heading__chevron ${active === item.strategy_id ? 'accordion-heading__chevron--active': 'accordion-heading__chevron--inactive'}`}
      style={{
        fontSize: '18px',
        opacity: `${1}`,
      }}
      vFlip={false}
    />
  </div> );
}
 
export default MenuItemHeader;