import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';
import { faTriangle } from '@fortawesome/pro-solid-svg-icons';
// import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { formatNumber, formatLargeNumber, formatPercent } from '../../../util/util_functions';
import { useDispatch } from 'react-redux';

export default function WatchlistRow(props) {
    const {name, symbol, price, today, marketCap} = props.data[props.symbol];
    const down = <FontAwesomeIcon icon={faTriangle} color="#ff5000" size="xs" rotation={180}/>
    const up = <FontAwesomeIcon icon={faTriangle} color="#00c807" size="xs" />
    const dispatch = useDispatch();

    function handleClick() {
        const watchlist = props.watchlist;
        const newTickers = watchlist.tickers.filter(ticker => ticker.ticker !== symbol);
        console.log(newTickers);
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
                        <span><div>{today > 0 ? up : down}</div> {formatPercent(today)}</span>
                    </div>
                    <div className="table-cell">
                        <span>{formatLargeNumber(marketCap)}</span>
                    </div>
                </div>
            </Link>
            <div className="item-delete-icon">
                <button className="btn delete-watchlist-item" onClick={handleClick}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </div>
    )
}