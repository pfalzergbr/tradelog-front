import React, { useState } from 'react';
import MenuItem from './MenuItem';

const AccotdionMenu = props => {
  const [activeItem, setActiveItem] = useState('title1')

  const setActive = (title) => {
    setActiveItem(title);
  }

  return (
    <div>
      <MenuItem item={{title: 'title1'}} active={activeItem} setActive={setActive} />
      <MenuItem item={{title: 'title2'}} active={activeItem} setActive={setActive} />
      <MenuItem item={{title: 'title3'}} active={activeItem} setActive={setActive} />
      <MenuItem item={{title: 'title4'}} active={activeItem} setActive={setActive} />
    </div>
  );
};

export default AccotdionMenu;