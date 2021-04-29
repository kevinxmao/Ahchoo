import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/pro-regular-svg-icons';
import Watchlist from './watchlist';

export default function WatchlistIndex(props) {
    useEffect(() => {
        props.fetchWatchlists()
    }, []);

    function allWatchlists() {
        const {createWatchlist, updateWatchlist, deleteWatchlist, openModal} = props;
        const watchlists = props.watchlists.map(
            watchlist => <Watchlist key={watchlist.id} watchlist={watchlist} openModal={openModal}/>
        )

        return watchlists;
    }

    return (
        <div className="watchlists-index">
            <div className="sidebar-title">
                <header>
                    <span>Lists</span>
                    <button><FontAwesomeIcon icon={faPlus} /></button>
                </header>
            </div>
            <div className="watchlists">
                {!!props.watchlists.length && allWatchlists()}
            </div>
        </div>
    )
}