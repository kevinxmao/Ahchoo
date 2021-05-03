import React from 'react';
import DashboardSidebar from '../dashboard/dashboard_sidebar';
import WatchlistSidebar from './watchlist_sidebar';
import { useSelector } from 'react-redux';

export default function WatchlistMain(props) {
    // const watchlist = useSelector()

    return (
        <>
            <div className="watchlist-main">
                <p>{props.id}</p>
            </div>
            <div className="watchlist-sidebar">
                <div>
                    <WatchlistSidebar />
                </div>
            </div>
        </>
    )
}