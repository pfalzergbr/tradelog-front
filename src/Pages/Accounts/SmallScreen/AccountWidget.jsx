import React from 'react';
import Button from '../../Shared/ui/Button';

const AccountWidget = ({ account }) => {
  return (
    <div className='widget widget--account'>
      <div className='widget__container'>
        <h4 className='widget__title'>Account - AccountName</h4>
        <p className='widget__value'>500$</p>
      </div>
      <div className='widget__details-container'>
        <p className="widget__details">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis omnis ad molestias repudiandae eligendi! Autem aspernatur tenetur magnam ut recusandae doloribus maiores dolorem nesciunt officiis ab? Ducimus cum neque vero.</p>
      </div>
      <div className='widget__button-container'>
        <Button>Edit</Button>
        <Button>Delete</Button>
        <Button buttonStyle='outline'>Details</Button>
        <Button buttonStyle='outline'>New Strategy</Button>
      </div>
    </div>
  );
};

export default AccountWidget;
