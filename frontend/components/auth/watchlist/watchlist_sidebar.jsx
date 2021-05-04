import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWatchlists } from '../../../actions/watchlists_actions';
import NewWatchlistForm from '../dashboard/watchlist_index/watchlist_forms/new_watchlist_form';
import { clearErrors } from '../../../actions/session_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/pro-regular-svg-icons';
import WatchlistSidebarItem from './watchlist_sidebar_item';

export default function WatchlistSidebar() {
    const [form, setForm] = useState(false);
    const dispatch = useDispatch();
    const watchlists = useSelector(state => Object.values(state.entities.watchlists))
    const errors = useSelector(state => state.errors.watchlist);

    useEffect(() => {
        dispatch(fetchWatchlists())
    }, []);

    function allWatchlists() {
        const watchlistTitles = watchlists.map(
            watchlist => <WatchlistSidebarItem key={watchlist.id} watchlist={watchlist} />
        )

        return watchlistTitles;
    }

    function renderForm() {
        return <NewWatchlistForm closeForm={closeForm} />
    }

    function openForm(event) {
        event.stopPropagation();
        setForm(true);
    }

    function closeForm() {
        setForm(false);
        dispatch(clearErrors());
    }

    return (
        <div className="sidebar-content">
            <div className="watchlists-index _defaultGreen">
                <div className="sidebar-title" onClick={(form && !!errors.length) ? closeForm : () => { }}>
                    <header>
                        <span>Lists</span>
                        <button className="btn new-watchlist _defaultGreen" onClick={openForm}><FontAwesomeIcon icon={faPlus} /></button>
                    </header>
                </div>
                {form && renderForm()}
                <div className="watchlists">
                    {!!watchlists.length && allWatchlists()}
                </div>
            </div>
        </div>
    )
}