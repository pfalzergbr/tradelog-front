import React, { useState } from 'react';

const TradeListHeaderColumn =({handleSort, value, text}) => {
  const [currentOrder, setCurrentOrder] = useState(null);
  const classes = `table-header__column ${handleSort && 'table-header__column--sortable'} ${currentOrder && 'sorting'+ currentOrder}`

  const handleSetSortBy = () => {
    if (handleSort){
      if (currentOrder === 'desc') {
        setCurrentOrder('asc');
      } else {
        setCurrentOrder('desc');
      }
      handleSort(value, currentOrder)
    }
  }

  return <th className={classes} onClick={handleSetSortBy}>{text}</th>;
};

export default TradeListHeaderColumn;
