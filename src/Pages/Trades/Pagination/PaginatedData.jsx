import React from 'react';
// import { useSelector } from 'react-redux'
// import { selectAccountCurrency } from '../../../Redux/Reducers/account';
import TradeItem from '../Table/TradeItem';

const PaginatedData = ({ pageData }) => {
  // const currency = useSelector(state => selectAccountCurrency(state, pageData[0].accountId)) || {};
  return (
    <tbody className="table-body">
      {pageData &&
        pageData.map(item => (
            <TradeItem key={item.trade_id} data={item}  />

        ))}
    </tbody>
  );
};

export default PaginatedData;
