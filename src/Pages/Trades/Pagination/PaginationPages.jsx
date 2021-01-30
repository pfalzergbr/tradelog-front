import React from 'react';
// import { Icon } from '@iconify/react';
// import bxChevronLeft from '@iconify/icons-bx/bx-chevron-left';
// import bxChevronRight from '@iconify/icons-bx/bx-chevron-right';

//TODO - ADD trade Counter on the bottom

const PaginationPages = ({ handlePageChange, pageNumbers, currentPage }) => {
  const firstPage = pageNumbers[0];
  const lastPage = pageNumbers[pageNumbers.length - 1];
  const previousPage = parseInt(currentPage) - 1;
  const nextPage = parseInt(currentPage) + 1;

  return (
    <div className='table-pagination'>
      <div className='table-pagination__btn-container'>
        {pageNumbers.length !== 0? (
          <React.Fragment>
            <div className='table-pagination__back'>
              {currentPage !== firstPage  && pageNumbers.length !== 1 &&  (
                <button
                  className='table-pagination__btn table-pagination__btn--chevron'
                  onClick={handlePageChange}
                  value={previousPage}>
                  {'<'}
                </button>
              )}
            </div>
            <div className='table-pagination__buttons'>
              {pageNumbers.map(page => (
                <button
                  className={`table-pagination__btn ${
                    currentPage.toString() === page
                      ? 'table-pagination__btn--active'
                      : 'table-pagination__btn--inactive'
                  } `}
                  onClick={handlePageChange}
                  key={page}
                  value={page}>
                  {page}
                </button>
              ))}
            </div>
            <div className='table-pagination__back'>
              {currentPage !== lastPage  && pageNumbers.length !== 1  && (
                <button
                  value={nextPage}
                  className='table-pagination__btn table-pagination__btn--chevron'
                  onClick={handlePageChange}>
                  &gt;
                </button>
              )}
            </div>
          </React.Fragment>
        ) : (
            <p className='table-pagination__btn table-pagination__btn--notrades'>
              No trades found
            </p>

        )}
      </div>
    </div>
  );
};

export default PaginationPages;
