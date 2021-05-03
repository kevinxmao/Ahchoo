import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';

export default function WatchlistRow(props) {
    const {name, symbol, price, today, marketCap} = props.data[props.symbol];

    function handleClick() {
        
    }

    return (
        <>
            <Link to={`/auth/tickers/${props.symbol}`}>
                <div className="table-cell">
                    <span>{name}</span>
                </div>
                <div className="table-cell">
                    <span>{symbol.toUpperCase()}</span>
                </div>
                <div className="table-cell">
                    <span>{price}</span>
                </div>
                <div className="table-cell">
                    <span>{today}</span>
                </div>
                <div className="table-cell">
                    <span>{marketCap}</span>
                </div>
            </Link>
            <button className="btn delete-watchlist-item">
                <FontAwesomeIcon icon={faTimes}/>
            </button>
        </>
    )
}