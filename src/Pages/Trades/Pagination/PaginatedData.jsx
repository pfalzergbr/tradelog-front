import React from 'react';
import { fillPaginatedData } from '../../../Services/paginationService';
// import { useSelector } from 'react-redux'
// import { selectAccountCurrency } from '../../../Redux/Reducers/account';
import TradeItem from '../Table/TradeItem';
import TradeItemPlaceholder from '../Table/TradeItemPlaceholder';

const PaginatedData = ({ pageData, itemPerPage }) => {
  // const currency = useSelector(state => selectAccountCurrency(state, pageData[0].accountId)) || {};
  const paddedPageData = pageData && fillPaginatedData(pageData, itemPerPage);

  return (
    <tbody className="table-body">
      {paddedPageData &&
        paddedPageData.map(item => item.trade_id ? (
            <TradeItem key={item.trade_id} data={item}  />
        ): <TradeItemPlaceholder />)}
    </tbody>
  );
};

export default PaginatedData;
