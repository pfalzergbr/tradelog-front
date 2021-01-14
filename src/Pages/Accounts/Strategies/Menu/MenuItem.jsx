import React from 'react';

// TODO - Build the whole menu for the actual app

const MenuItem = ({ item, active, setActive }) => {
  const { title, text, id } = item;

  const activate = () => {
    setActive(id);
  };

  return (
    <div className='menu-item'>
      <div className={`accordion-heading ${active === id ? 'accordion-heading--active' : 'accordion-heading-inactive'}`} onClick={activate}>
        <div className='item-container'>
          <p className='accordion-heading__title'>{title}</p>
          <div value-container>
            <span className='accordion-heading__value'>value</span>
            <span className='accordion-heading__arrow'>^</span>
          </div>
        </div>
      </div>

      <div className={`${active === id ? 'accordion-content--show' : 'accordion-content--hide'} accordion-content`}>
        <div className='item-container'>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
