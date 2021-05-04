import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';
import { formatNumber, formatLargeNumber, formatPercent } from '../../../util/util_functions';

export default function WatchlistRow(props) {
    const {name, symbol, price, today, marketCap} = props.data[props.symbol];

    function handleClick() {
        
    }

    return (
        <div className="table-row">
            <Link to={`/auth/tickers/${props.symbol}`}>
                <div className="table-cells">
                    <div className="table-cell">
                        <span>{name}</span>
                    </div>
                    <div className="table-cell">
                        <span>{symbol.toUpperCase()}</span>
                    </div>
                    <div className="table-cell">
                        <span>{formatNumber(price)}</span>
                    </div>
                    <div className="table-cell">
                        <span>{formatPercent(today)}</span>
                    </div>
                    <div className="table-cell">
                        <span>{formatLargeNumber(marketCap)}</span>
                    </div>
                </div>
            </Link>
            <div className="item-delete-icon">
                <button className="btn delete-watchlist-item">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </div>
    )
}