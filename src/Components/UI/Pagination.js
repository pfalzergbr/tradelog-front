import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import PaginatedData from './PaginatedData'

const Pagination = (props) => {
    const { data, pageNumbers, userId, isLoading } = props;
    return (
        <div>
            <Switch>
                {pageNumbers.map((pageNumber) => (
                    <Route path={`/${userId}/trades/page-${pageNumber}`}>
                        <PaginatedData
                            pageData={data[pageNumber - 1]}
                            isLoading={isLoading}
                        />
                    </Route>
                ))}
            </Switch>
            <ul>
               
                { pageNumbers.map(pageNumber => <NavLink to={`/${userId}/trades/page-${pageNumber}`}>{pageNumber}</NavLink>)}
        
            </ul>
        </div>
    );
};

export default Pagination;
