import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllQuotes } from '../../../util/companies/data_api_util';
import WatchlistMain from './watchlist_main';
import { fetchWatchlists } from '../../../actions/watchlists_actions';

export default function WatchlistPage(props) {
    const id = props.match.params.id;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchWatchlists())
    }, [])

    return null;

    return (
        <div id="_watchlist">
            <div className="watchlist-page">
                <div className="watchlist-main-content">
                    <div className="watchlist-container">
                        <WatchlistMain id={id}/>
                    </div>
                </div>
            </div>
        </div>
    )
}