import React from 'react';

//TODO - ADD trade Counter on the bottom

const PaginationPages = ({ handlePageChange, pageNumbers, currentPage }) => {
  return (
    <div className='table-pagination'>
      <ul className='table-pagination__btn-container'>
        {pageNumbers.map(page => (
          <button
            className={`table-pagination__btn ${
              currentPage === page ? 'table-pagination__btn--active' : null
            } `}
            onClick={handlePageChange}
            key={page}
            value={page}>
            {page}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default PaginationPages;
