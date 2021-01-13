import React from 'react';

const PaginationPages = ({ handlePageChange, pageNumbers }) => {
  return (
    <div className='table-pagination'>
      <ul className="table-pagination__btn-container">
        {pageNumbers.map(page => (
          <button className="table-pagination__btn" onClick={handlePageChange} key={page} value={page}>
            {page}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default PaginationPages;
