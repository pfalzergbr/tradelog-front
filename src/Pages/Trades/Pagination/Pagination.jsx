import React, { useState } from 'react';

import {
  paginate,
  generatePageNumbers,
} from '../../../Services/paginationService';
import TradeListHeader from '../Table/TradeListHeader';
import PaginatedData from './PaginatedData';
import PaginationPages from './PaginationPages';

const Pagination = ({ data }) => {
  const paginatedData = paginate(data, 5);
  const pageNumbers = generatePageNumbers(paginatedData);
  const [currentPage, setCurrentPage] = useState(1);
  const pageData = paginatedData[currentPage - 1];

  const handlePageChange = e => {
    setCurrentPage(e.target.value);
  };

  return (
    <React.Fragment>
    <div>
      <table className='table-container'>
        <TradeListHeader />
        <PaginatedData pageData={pageData} />
      </table>
      <PaginationPages
        handlePageChange={handlePageChange}
        pageNumbers={pageNumbers}
      />
      </div>
    </React.Fragment>
  );
};

export default Pagination;
