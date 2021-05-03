import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function WatchlistPage(props) {
    const holdings = useSelector(state => state.entities.holdings);
    const dispatch = useDispatch()

    

    return (
        <div id="_watchlist">
            <div className="watchlist-main">
                <div className="watchlist-main-content">
                    <div className="watchlist-container">

                    </div>
                </div>
            </div>
        </div>
    )
}