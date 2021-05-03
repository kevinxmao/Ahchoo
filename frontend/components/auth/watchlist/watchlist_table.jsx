import React, { useState, useEffect } from 'react';

export default function WatchlistTable(props) {
    const [tickers, setTickers] = useState(props.tickers);
    const initialSortState = {
        name: '',
        symbol: '',
        price: '',
        today: '',
        marketCap: '',
    }
    const [sort, setSort] = useState(initialSortState);
    const [data, setData] = useState(null);

    useEffect(() => {
        debugger
        const symbols = tickers.map(ticker => ticker.ticker);
        console.log(symbols)
    }, [props.tickers]);

    function handleHeaderClick(key) {
        debugger;
        switch(sort[key]) {
            case '':
                setSort(Object.assign({}, sort, { [key]: 'ASC'}));
                break;
            case 'ASC':
                setSort(Object.assign({}, sort, { [key]: 'DSC' }));
                break;
            case 'DSC':
                setSort(Object.assign({}, sort, { [key]: '' }));
                break;
            default:
                break;
        }
    }

    function renderColumnHeader(headerName) {
        const key = camalize(headerName);
        const className = sort[key] ? "column-header active" : "column-header";
        return (
            <div className={className}>
                <button onClick={() => handleHeaderClick(key)}>
                    <div>{headerName}</div>
                    <div className="header-arrow"></div>
                </button>
            </div>
        )
    }

    return (
        <header className="table-header">
            <div>
                {renderColumnHeader('Name')}
                {renderColumnHeader('symbol')}
                {renderColumnHeader('Price')}
                {renderColumnHeader('Today')}
                {renderColumnHeader('Market Cap')}
            </div>
        </header>
    )
}

function camalize(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

