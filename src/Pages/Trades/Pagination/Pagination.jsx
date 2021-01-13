import React, { useState } from 'react';

import {
  paginate,
  generatePageNumbers,
} from '../../../Services/paginationService';
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
      <PaginatedData pageData={pageData} />
      <PaginationPages
        handlePageChange={handlePageChange}
        pageNumbers={pageNumbers}
      />
    </React.Fragment>
  );
};

export default Pagination;
