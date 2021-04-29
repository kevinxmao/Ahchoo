import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/pro-regular-svg-icons';

export default function WatchlistIndex(props) {
    useEffect(() => {
        props.fetchWatchlists().then(console.log(props.watchlists))
    }, [])


    return (
        <div className="watchlists-index">
            <div className="sidebar-title">
                <header>
                    <span>Lists</span>
                    <button><FontAwesomeIcon icon={faPlus} /></button>
                </header>
            </div>
        </div>
    )
}