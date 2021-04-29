import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faEllipsisH } from '@fortawesome/pro-regular-svg-icons';
import WatchlistItem from './watchlist_item';
import { fetchAllQuotes } from '../../../../util/companies/data_api_util';

export default function Watchlist(props) {
    const downArrow = <FontAwesomeIcon icon={faAngleDown} />;
    const upArrow = <FontAwesomeIcon icon={faAngleUp} />

    const ellipsis = <FontAwesomeIcon icon={faEllipsisH}/>
    const [expand, setExpand] = useState(false);
    const [data, setData] = useState(null);

    function handleExpandClick(event) {
        // event.preventDefault();
        event.stopPropagation();
        setExpand(!expand);
    }

    function expandedList() {
        return props.watchlist.tickers.map(
            item => <WatchlistItem key={item.id} ticker={item.ticker} datum={data[item.ticker]}/>
        )
    }

    function handleNameClick(event) {
        event.stopPropagation();
        props.openModal('watchlistName');
    }

    useEffect(() => {
        const tickers = props.watchlist.tickers.map(item => item.ticker);
        fetchAllQuotes(tickers).then(quotes => setData(quotes));
    }, [])
    
    return (
        <div className="watchlist">
            <div className="watchlist-title" onClick={(e) => handleExpandClick(e)}>
                <header>
                    <button className="watchlist-name-button" onClick={(e) => handleNameClick(e)}>{props.watchlist.name}</button>
                    <div className="watchlist-title-nav">
                        <button className="list-overflow">{ellipsis}</button>
                        <button className="list-expand" onClick={(e) => handleExpandClick(e)}>{expand ? upArrow : downArrow}</button>
                    </div>
                </header>
            </div>
            {(data && expand) && <div className="list-items">{expandedList()}</div>}
        </div>
    )
}