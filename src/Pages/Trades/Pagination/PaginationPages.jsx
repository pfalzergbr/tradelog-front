import React from 'react';

const PaginationPages = ({handlePageChange, pageNumbers}) => {
  return ( <ul>
    {pageNumbers.map(page => (
      <button onClick={handlePageChange} key={page} value={page}>
        {page}
      </button>
    ))}
  </ul> );
}
 
export default PaginationPages;