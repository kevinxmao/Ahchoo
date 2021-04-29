import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faEllipsisH } from '@fortawesome/pro-regular-svg-icons';
import WatchlistItem from './watchlist_item';
import { fetchAllQuotes } from '../../../../util/companies/data_api_util';

export default function Watchlist(props) {
    const downArrow = <FontAwesomeIcon icon={faAngleDown} />;
    const upArrow = <FontAwesomeIcon icon={faAngleUp} />
    const ellipsis = <FontAwesomeIcon icon={faEllipsisH}/>
    const [expand, setExpand] = useState(true);
    const [data, setData] = useState(null);

    function handleExpandClick() {
        setExpand(!expand)
    }

    function expandedList() {
        return props.watchlist.tickers.map(
            item => <WatchlistItem key={item.id} ticker={item.ticker} datum={data[item.ticker]}/>
        )
    }

    useEffect(() => {
        const tickers = props.watchlist.tickers.map(item => item.ticker);
        fetchAllQuotes(tickers).then(quotes => setData(quotes));
    }, [])
    
    return (
        <div className="watchlist">
            <div className="watchlist-title">
                <header>
                    <button className="watchlist-name-button" onClick={() => props.openModal('watchlistName')}>{props.watchlist.name}</button>
                    <div className="watchlist-title-nav">
                        <button className="list-overflow">{ellipsis}</button>
                        <button className="list-expand">{downArrow}</button>
                    </div>
                </header>
            </div>
            {(data && expand) && <div className="list-items">{expandedList()}</div>}
        </div>
    )
}