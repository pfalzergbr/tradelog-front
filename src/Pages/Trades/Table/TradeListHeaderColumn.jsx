import React, { useState } from 'react';

const TradeListHeaderColumn =({handleSort, value, text}) => {
  const [currentOrder, setCurrentOrder] = useState(null);


  const handleSetSortBy = () => {
    if (currentOrder === 'desc') {
      setCurrentOrder('asc');
    } else {
      setCurrentOrder('desc');
    }
    handleSort(value, currentOrder)
  }

  return <th className='table-header__column' onClick={handleSetSortBy}>{text}</th>;
};

export default TradeListHeaderColumn;
