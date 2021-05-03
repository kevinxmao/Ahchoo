import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllQuotes } from '../../../util/companies/data_api_util';
import WatchlistMain from './watchlist_main';

export default function WatchlistPage(props) {
    // const holdings = useSelector(state => state.entities.holdings);
    // const dispatch = useDispatch();
    // const [data, setData] = useState(null);

    return (
        <div id="_watchlist">
            <div className="watchlist-main">
                <div className="watchlist-main-content">
                    <div className="watchlist-container">
                        <WatchlistMain />
                    </div>
                </div>
            </div>
        </div>
    )
}