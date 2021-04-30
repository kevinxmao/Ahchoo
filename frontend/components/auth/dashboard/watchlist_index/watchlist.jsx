import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faEllipsisH, faCog, faTimesCircle } from '@fortawesome/pro-regular-svg-icons';
import WatchlistItem from './watchlist_item';
import { fetchAllQuotes } from '../../../../util/companies/data_api_util';
import { Link } from 'react-router-dom';

export default function Watchlist(props) {
    const downArrow = <FontAwesomeIcon icon={faAngleDown} />;
    const upArrow = <FontAwesomeIcon icon={faAngleUp} />

    const ellipsis = <FontAwesomeIcon icon={faEllipsisH}/>
    const [expand, setExpand] = useState(false);
    const [data, setData] = useState(null);
    const [dropdown, setDropdown] = useState(false);

    function handleExpandClick(event) {
        event.stopPropagation();
        setExpand(!expand);
    }

    function expandedList() {
        return props.watchlist.tickers.map(
            item => <WatchlistItem key={item.id} ticker={item.ticker} datum={data[item.ticker]}/>
        )
    }

    function handleOverflowClick(event) {
        event.stopPropagation();
        setDropdown(!dropdown);
    }

    function globalClickListener(nativeEvent) {
        setDropdown(false);
    }

    useEffect(() => {
        if (dropdown) {
            window.addEventListener('click', globalClickListener)
        } else {
            window.removeEventListener('click', globalClickListener)
        }
    })

    function handleBodyclick(syntheticEvent) {
        syntheticEvent.stopPropagation();
    }

    function renderDropdown() {
        return (
            <div className="watchlist-dropdown" onClick={handleBodyclick}>
                <div>
                    <button onClick={() => props.openModal(`edit-list-${props.watchlist.id}`)}>
                        <div className="dropdown-icon"><FontAwesomeIcon icon={faCog} /></div>
                        <span>Edit List</span>
                    </button>
                    <button onClick={() => props.openModal(`delete-list-${props.watchlist.id}`)}>
                        <div className="dropdown-icon"><FontAwesomeIcon icon={faTimesCircle} /></div>
                        <span>Delete List</span>
                    </button>
                </div>
            </div>
        )
    }

    useEffect(() => {
        const tickers = props.watchlist.tickers.map(item => item.ticker);
        if (tickers.length) fetchAllQuotes(tickers).then(quotes => setData(quotes));
    }, [])
    
    return (
        <div className="watchlist">
            <div className="watchlist-title" onClick={(e) => handleExpandClick(e)}>
                <header>
                    <Link className="watchlist-name-button" to={`/auth/watchlists/${props.watchlist.id}`} onClick={(e) => handleNameClick(e)}>
                        <span>{props.watchlist.name}</span>
                    </Link>
                    <div className="watchlist-title-nav">
                        <button className={dropdown ? "list-overflow active" : "list-overflow"} onClick={(e) => handleOverflowClick(e)}>{ellipsis}</button>
                        <button className="list-expand" onClick={(e) => handleExpandClick(e)}>{expand ? upArrow : downArrow}</button>
                    </div>
                </header>
                {dropdown && renderDropdown()}
            </div>
            {(data && expand) && <div className="list-items">{expandedList()}</div>}
        </div>
    )
}