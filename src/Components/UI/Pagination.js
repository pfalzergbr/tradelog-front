import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

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
                { pageNumber !== 1 && <NavLink to={`/${userId}/trades/page-${pageNumber-1}`}>Previous</NavLink>}
                { pageNumbers.map(pageNumber => <NavLink to={`/${userId}/trades/page-${pageNumber}`}>{pageNumber}</NavLink>)}
                { pageNumber !== pageNumbers.length && <NavLink to={`/${userId}/trades/page-${pageNumber +1}`}>Next</NavLink>}
            </ul>
        </div>
    );
};

export default Pagination;
