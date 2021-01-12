import React from 'react';

const AccordionMenu = ({item, active, setActive}) => {

  const activate = () => {
    setActive(item.title);
  }

  return (
    <div className='accordion' >
      <div style={{height: '5rem', backgroundColor: 'grey'}} className='accordionHeading' onClick={activate}>
        <div className='container'>
          <p>{item.title}</p>
          <span>X</span>
        </div>
      </div>

      <div className={`${active === item.title ? 'show' : 'hide'} accordionContent`}>
        <div className='container'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus
            hic magni itaque culpa in animi ducimus ipsam odio nisi, voluptate
            soluta maxime corrupti laudantium suscipit totam illum nam modi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionMenu;
