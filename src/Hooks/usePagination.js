import {useState} from 'react';

const usePagination = () => {
    const [numberOnPage, setNumberOnPage] = useState();
    const [currentPage, setCurrentPage] = useState();

    //TODO: Build a pagination hook

    return {numberOnPage, setNumberOnPage, currentPage, setCurrentPage}
}