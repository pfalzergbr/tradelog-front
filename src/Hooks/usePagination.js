import { useState } from 'react';

export const usePagination = () => {
    const [paginatedData, setPaginatedData] = useState([]);

    //Takes data, and items, and a per per page value. Sets paginated data in State.
    const paginate = (data, itemPerPage) => {
        const newData = [];
        let page = [];
        for (let i = 1; i <= data.length; i++) {
            if (i % itemPerPage === 0 || i === data.length) {
                page.push(data[i - 1]);
                newData.push(page);
                page = [];
            } else if (i % itemPerPage !== 0) {
                page.push(data[i - 1]);
            }
        }
        setPaginatedData(newData);
    };
    //Generates the pagenumbers as an array for the pagination component.
    const generatePageNumbers = (paginatedData) => {
        const pageNumbers = [];
        for (let i = 1; i <= paginatedData.length; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const pageNumbers = generatePageNumbers(paginatedData);

    return { paginate, paginatedData, pageNumbers };
};
