import {useState} from 'react';

const useSort = (array, initialSortBy) => {
  const [sortBy, setSortBy] = useState(initialSortBy)
  const [order, setOrder] = useState('desc')

  const toggleOrder = () => {
    if (order === 'desc') {
      setOrder('asc');
    } else {
      setOrder('desc');
    }
  }

  const handleSetSortBy = (sortBy) => {
    setOrder('desc');
    setSortBy(sortBy);
  }

  const sortedArray = array.sort((a, b) => { return b[sortBy] - a[sortBy]})


  return [handleSetSortBy, toggleOrder, sortedArray];
}
 
export default useSort;