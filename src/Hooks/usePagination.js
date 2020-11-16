import {useState, useEffect} from 'react';

export const usePagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedData, setPaginatedData] = useState([]);
    //TODO: Build a pagination hook

    const paginate = (data, itemPerPage ) => {
        const newData = []
        let page = [];
        for (let i = 1; i <= data.length; i++) {
            
            if (i % itemPerPage === 0 || i === data.length){
                page.push(data[i-1])
                newData.push(page)
                page = [];

            } else if (i % itemPerPage !== 0 ) {
                page.push(data[i-1]);
            }   
        } 
        setPaginatedData(newData);
    }

    const generatePageNumbers = (paginatedData) =>  {
        const pageNumbers = []
        for (let i = 1; i <= paginatedData.length; i++) {
            pageNumbers.push(i);
        }  
        return pageNumbers;
    }

    const pageNumbers = generatePageNumbers(paginatedData);

    return {paginatedData, setPaginatedData, paginate, pageNumbers}

}