import React from 'react';

//TODO - implement a loop to build columns automatically.
//TODO - Build in Sorting
const TradeListHeader = () => {
  return (
    <div className='table-header'>
        <span className='table-header__column'>Symbol</span>
        <span className='table-header__column'>Strategy</span>
        <span className='table-header__column'>Bias</span>
        <span className='table-header__column'>Profit/Loss</span>
        <span className='table-header__column'>Date</span>
    </div>
  );
};

export default TradeListHeader;
