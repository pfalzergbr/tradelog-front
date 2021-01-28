import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import bxChevronDown from '@iconify/icons-bx/bx-chevron-down';

const TradeListHeaderColumn = ({ handleSort, value, text }) => {
  const [currentOrder, setCurrentOrder] = useState(null);
  const classes = `table-header__column ${
    handleSort && 'table-header__column--sortable'
  } ${currentOrder && 'sorting' + currentOrder}`;

  const handleSetSortBy = () => {
    if (handleSort) {
      if (currentOrder === 'desc') {
        setCurrentOrder('asc');
      } else {
        setCurrentOrder('desc');
      }
      handleSort(value, currentOrder);
    }
  };

  return (
    <th className={classes} onClick={handleSetSortBy}>

    <span>
    {text}
    </span>
    {<Icon
      icon={bxChevronDown}
      className='chevron'
      style={{ fontSize: '14px', opacity: `${currentOrder ? 1 : 0}` }}
      vFlip={currentOrder === 'asc' ? false : true}
      />}

    </th>
  );
};

export default TradeListHeaderColumn;
