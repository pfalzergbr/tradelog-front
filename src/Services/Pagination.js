import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import PaginatedData from '../Pages/Shared/PaginatedData'

const Pagination = (props) => {
    const { data, pageNumbers, userId} = props;
    return (
        <div>
            <Switch>
                {pageNumbers.map((pageNumber) => (
                    <Route key={pageNumber} path={`/${userId}/trades/page-${pageNumber}`}>
                        <PaginatedData
                            pageData={data[pageNumber - 1]}
                            itemType={'trade'}
                        />
                    </Route>
                ))}
            </Switch>
            <ul>
               
                { pageNumbers.map(pageNumber => <NavLink key={pageNumber} to={`/${userId}/trades/page-${pageNumber}`}>{pageNumber}</NavLink>)}
        
            </ul>
        </div>
    );
};

export default Pagination;
