export const paginate = (data, itemPerPage) => {
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
  return newData;
};

export const generatePageNumbers = paginatedData => {
  const pageNumbers = [];
  for (let i = 1; i <= paginatedData.length; i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
};


export const fillPaginatedData = (pageData, itemPerPage) => {
  let i = pageData.length
  let filledPageData = pageData;
  while (i < itemPerPage) {
    filledPageData.push({})
    i++
  }
  return filledPageData
}