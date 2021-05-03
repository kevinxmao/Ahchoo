import React, { useState, useEffect } from 'react';
import { fetchWatchlistInfo } from '../../../util/companies/data_api_util';

export default function WatchlistTable(props) {
    // const [tickers, setTickers] = useState(props.tickers);
    const initialSortState = {
        name: '',
        symbol: '',
        price: '',
        today: '',
        marketCap: '',
    }
    const [sort, setSort] = useState(initialSortState);
    const [symbols, setSymbols] = useState([]);
    const [data, setData] = useState(null);

    useEffect(() => {
        const tickerArr = props.tickers.map(ticker => ticker.ticker)
        setSymbols(tickerArr);
        fetchWatchlistInfo(tickerArr).then(res => setData(res));
    }, [props.tickers]);

    function handleHeaderClick(key) {
        debugger;
        switch(sort[key]) {
            case '':
                setSort(Object.assign({}, initialSortState, { [key]: 'ASC'}));
                setSymbols(sortSymbols(symbols, key, 'ASC', data));
                break;
            case 'ASC':
                setSort(Object.assign({}, initialSortState, { [key]: 'DSC' }));
                setSymbols(sortSymbols(symbols, key, 'DSC', data));
                break;
            case 'DSC':
                setSort(Object.assign({}, initialSortState, { [key]: '' }));
                setSymbols(props.tickers.map(ticker => ticker.ticker));
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

function sortSymbols(symbols, critieria, order, data) {

}

