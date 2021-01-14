import React, { useState } from 'react';
import MenuItem from './MenuItem';

const AccordionMenu = ({ account }) => {
  const [activeItem, setActiveItem] = useState('1');

  const setActive = title => {
    setActiveItem(title);
  };

  const dummyItems = [
    {
      title: 'Strategy 1',
      id: 1,
      text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus
  hic magni itaque culpa in animi ducimus ipsam odio nisi, voluptate
  soluta maxime corrupti laudantium suscipit totam illum nam modi.`,
    },
    {
      title: 'Strategy 2',
      id: 2,
      text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus
  hic magni itaque culpa in animi ducimus ipsam odio nisi, voluptate
  soluta maxime corrupti laudantium suscipit totam illum nam modi.`,
    },
    {
      title: 'Strategy 3',
      id: 3,
      text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus
  hic magni itaque culpa in animi ducimus ipsam odio nisi, voluptate
  soluta maxime corrupti laudantium suscipit totam illum nam modi.`,
    },
  ];

  return (
    <div className='accordion'>
      {/*<MenuItem item={account} active={activeItem} setActive={setActive} />*/}
      {dummyItems.map(item => (
        <MenuItem key={item.id} item={item} active={activeItem} setActive={setActive} />
      ))}
    </div>
  );
};

export default AccordionMenu;
