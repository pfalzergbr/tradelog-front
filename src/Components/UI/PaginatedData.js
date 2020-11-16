import React from 'react';

const PaginatedData = (props) => {
    const { isLoading, pageData } = props;


    return (
        <React.Fragment>
            {isLoading && <Loading />}
            {!isLoading && (
                <div>
                    <h1>Trades of {user.userName}</h1>
                    {pageData &&
                        pageData.map((item) => (
                            <Link key={item._id} to={`/item/${item._id}`}>
                                <TradeItem data={item} />
                            </Link>
                        ))}
                </div>
            )}
        </React.Fragment>
    );
};

export default PaginatedData;
