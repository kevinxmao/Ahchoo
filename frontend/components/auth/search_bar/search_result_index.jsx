import React from 'react';

const SearchResultsList = props => {
    if (!props.tickers) return null;
    return (
        <div className="search-dropdown">
            {props.tickers.slice(0, 5).map(ticker => <p>Just an item</p>)}
        </div>
    )
}

export default SearchResultsList;