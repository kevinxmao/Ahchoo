import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WatchlistMain from './watchlist_main';
import { fetchWatchlists } from '../../../actions/watchlists_actions';
import LoadingPage from '../../loading_page';

export default function WatchlistPage(props) {
    const id = props.match.params.id;
    const dispatch = useDispatch();
    const watchlists = useSelector(state => Object.values(state.entities.watchlists));
    
    useEffect(() => {
        dispatch(fetchWatchlists())
    }, [])

    if (!watchlists.length) return <LoadingPage />;

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