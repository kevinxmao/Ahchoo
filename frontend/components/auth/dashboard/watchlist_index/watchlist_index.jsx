import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/pro-regular-svg-icons';

function WatchlistIndex(props) {
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

export default WatchlistIndex;