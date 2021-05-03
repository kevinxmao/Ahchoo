import React from 'react';
import DashboardSidebar from '../dashboard/dashboard_sidebar';
import WatchlistSidebar from './watchlist_sidebar';

export default function WatchlistMain(props) {
    return (
        <>
            <div className="watchlist-main"></div>
            <div className="watchlist-sidebar">
                <div>
                    <WatchlistSidebar />
                </div>
            </div>
        </>
    )
}