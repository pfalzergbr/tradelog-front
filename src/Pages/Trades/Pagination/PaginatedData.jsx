import React from 'react';
import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion';
import { fillPaginatedData } from '../../../Services/paginationService';
// import { useSelector } from 'react-redux'
// import { selectAccountCurrency } from '../../../Redux/Reducers/account';
import TradeItem from '../Table/TradeItem';
import TradeItemPlaceholder from '../Table/TradeItemPlaceholder';
import {tableAnimation } from '../../../Services/Animations/tableTransition';

const PaginatedData = ({ pageData, itemPerPage }) => {
  // const currency = useSelector(state => selectAccountCurrency(state, pageData[0].accountId)) || {};
  const paddedPageData = pageData ? fillPaginatedData(pageData, itemPerPage) : fillPaginatedData([], itemPerPage);

  return (
    <AnimateSharedLayout initial={false}>
      <motion.tbody className='table-body' {...tableAnimation} layout>
        {paddedPageData &&
          paddedPageData.map((item, index) =>
            item.trade_id ? (
              <TradeItem key={item.trade_id} data={item} />
            ) : (
              <TradeItemPlaceholder key={index} />
            ),
          )}
      </motion.tbody>
    </AnimateSharedLayout>
  );
};

export default PaginatedData;
