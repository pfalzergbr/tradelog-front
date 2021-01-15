import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { selectAccountStats } from '../../../../Redux/Reducers/account';

import MenuItem from './MenuItem';


const AccordionMenu = ({ account = {}, strategies = [] }) => {
  const [activeItem, setActiveItem] = useState('1');
  // const accountStats = useSelector(state => selectAccountStats(state, account.accoun_id) || {});
  const setActive = title => {
    setActiveItem(title);
  };

  // const currentAccount = {
  // strategy_name: ,
  // total_pnl,
  // winPercentage,
  // strategy_id,
  // average_profit,
  // average_loss,
  // num_of_profit,
  // num_of_loss,
  // num_of_trades
  
  // }

  return (
    <div className='accordion'>
        {/*<MenuItem item={account} active={activeItem} setActive={setActive} />*/}
      { strategies && strategies.map(item => (
        <MenuItem key={item.strategy_id} item={item} active={activeItem} setActive={setActive} />
      ))}
    </div>
  );
};

export default AccordionMenu;
