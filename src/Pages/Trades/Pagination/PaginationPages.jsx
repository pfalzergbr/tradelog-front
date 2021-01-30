import React from 'react';

//TODO - ADD trade Counter on the bottom

const PaginationPages = ({ handlePageChange, pageNumbers, currentPage }) => {
  return (
    <div className='table-pagination'>
      <ul className='table-pagination__btn-container'>
        {pageNumbers.length !== 0 ? pageNumbers.map(page => (
          <button
            className={`table-pagination__btn ${
              currentPage === page ? 'table-pagination__btn--active' : ''
            } `}
            onClick={handlePageChange}
            key={page}
            value={page}>
            {page}
          </button> 
        )): <p className='table-pagination__btn table-pagination__btn--notrades'>No trades found</p>}
      </ul>
    </div>
  );
};

export default PaginationPages;
