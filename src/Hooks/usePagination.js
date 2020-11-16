import {useState} from 'react';

export const usePagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedData, setPaginatedData] = useState()
    //TODO: Build a pagination hook

    const paginate = (data, itemPerPage ) => {
        const newData = []
        let page = [];
        for (i = 1; i < data.length; i++) {
            if (i < itemPerPage) {
                page.push(i);
            } else if (i % itemPerPage === 0){
                page.push(i)
                newData.push(page)
                page = [];
            }
        }
        setPaginatedData(newData);
    }

    const readCurrentPage = (page) => {
        return paginatedData[page-1];
    }

    const generatePageNumbers = (paginatedData) =>  {
        const pageNumbers = []
        for (i = 1; i < paginatedData.length; i++) {
            pageNumbers.push(i);
        }  
        return pageNumbers;
    }

    return {paginatedData, paginate, readCurrentPage, generatePageNumbers}
}