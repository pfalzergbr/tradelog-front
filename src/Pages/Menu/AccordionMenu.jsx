import React, { useState } from 'react';

import MenuItem from './MenuItem';
import MenuItemAccount from './MenuItemAccount';

const AccordionMenu = ({ account = {}, strategies = {}, setFilter }) => {
  const [activeItem, setActiveItem] = useState(account.account_id);
  const setActive = title => {
    setActiveItem(title);
  };

  return (
    <div className='accordion'>
      <MenuItemAccount
        item={account}
        active={activeItem}
        setActive={setActive}
        setFilter={setFilter}
        currency={account.currency}
      />
      {strategies &&
        strategies.map(item => (
          <MenuItem
            key={item.strategy_id}
            item={item}
            active={activeItem}
            setActive={setActive}
            setFilter={setFilter}
            currency={account.currency}
          />
        ))}
    </div>
  );
};

export default AccordionMenu;
