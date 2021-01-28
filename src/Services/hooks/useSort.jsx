import { useState } from 'react';

const useSort = (array, initialSortBy) => {
  const [sortBy, setSortBy] = useState(initialSortBy);
  const [order, setOrder] = useState('desc');


  const handleSort = (sortBy, order) => {
    setSortBy(sortBy);
    setOrder(order);
  }

  const sortedArray = array.sort((a, b) => {
    if (order === 'desc') {
      return b[sortBy] - a[sortBy];
    } else {
      return a[sortBy] - b[sortBy];  
    }
  });

  return [handleSort, sortedArray];
};

export default useSort;
