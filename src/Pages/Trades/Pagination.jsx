import React, { useState } from 'react';

import {
  paginate,
  generatePageNumbers,
} from '../../Services/paginationService';
import PaginatedData from './PaginatedData';

const Pagination = ({ data }) => {
  const paginatedData = paginate(data, 2);
  const pageNumbers = generatePageNumbers(paginatedData);
  const [currentPage, setCurrentPage] = useState(1);
  const pageData = paginatedData[currentPage - 1];

  const handlePageChange = e => {
    setCurrentPage(e.target.value);
  };

  return (
    <div>
      <PaginatedData pageData={pageData} />
      <ul>
        {pageNumbers.map(page => (
          <button onClick={handlePageChange} key={page} value={page}>
            {page}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
