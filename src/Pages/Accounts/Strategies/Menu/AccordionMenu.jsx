import React, { useState } from 'react';


import MenuItem from './MenuItem';
import MenuItemAccount from './MenuItemAccount';


const AccordionMenu = ({ account = {}, strategies = [] }) => {
  const [activeItem, setActiveItem] = useState('1');
  const setActive = title => {
    setActiveItem(title);
  };

  
  // Very hacky, but at least it works. Fint a more elegant way to refactor in a reusable way
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
