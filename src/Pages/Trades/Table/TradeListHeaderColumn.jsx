import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import bxChevronDown from '@iconify/icons-bx/bx-chevron-down';

const TradeListHeaderColumn = ({
  handleSort,
  value,
  text,
  activeColumn,
  setActiveColumn,
}) => {
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
      setActiveColumn(value);
      handleSort(value, currentOrder);
    }
  };

  return (
    <th className={classes} onClick={handleSetSortBy}>
      <span>{text}</span>
      <span className='chevron__container'>
        <Icon
          icon={bxChevronDown}
          className='chevron__icon'
          style={{
            fontSize: '14px',
            opacity: `${activeColumn === value ? 1 : 0}`,
          }}
          vFlip={currentOrder === 'asc' ? false : true}
        />
      </span>
    </th>
  );
};

export default TradeListHeaderColumn;
