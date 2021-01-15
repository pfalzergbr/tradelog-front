import React, { useState } from 'react';


import MenuItem from './MenuItem';
import MenuItemAccount from './MenuItemAccount';


const AccordionMenu = ({ account = {}, strategies = {} }) => {
  const [activeItem, setActiveItem] = useState('1');
  const setActive = title => {
    setActiveItem(title);
  };
  
  // VERY_VERY hacky, but at least it works. Fint a more elegant way to refactor in a reusable way
  // Major refactor needed from the backend? Swap the SQL join logic? Merge strategyies and strategystats?
  return (
    <div className='accordion'>
        <MenuItemAccount item={account} active={activeItem} setActive={setActive} />
      { strategies && strategies.map(item => (
        <MenuItem key={item.strategy_id} item={item} active={activeItem} setActive={setActive} />
      ))}
    </div>
  );
};

export default AccordionMenu;
