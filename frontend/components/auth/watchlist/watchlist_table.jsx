import React, { useState } from 'react';

export default function WatchlistTable(props) {
    const [tickers, setTickers] = useState(props.tickers);
    const [sort, setSort] = useState({
        name: '',
        symbol: '',
        price: '',
        today: '',
        marketCap: '',
    })

    function handleHanderClick(name) {

    }

    function renderColumnHeader(headerName) {
        const key = camalize(headerName);
        const className = 
        return (
            <div className="column-header">
                <button>
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

