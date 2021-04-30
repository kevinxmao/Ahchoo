import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/pro-regular-svg-icons';
import Watchlist from './watchlist';
import NewWatchlistForm from './new_watchlist_form/new_watchlist_form';

export default function WatchlistIndex(props) {
    const [form, setForm] = useState(false);

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

    function renderForm() {
        return <NewWatchlistForm closeForm={closeForm} createWatchlist={props.createWatchlist}/>
    }

    function closeForm() {
        setForm(false);
    }

    return (
        <div className="watchlists-index">
            <div className="sidebar-title">
                <header>
                    <span>Lists</span>
                    <button className="btn new-watchlist" onClick={() => setForm(true)}><FontAwesomeIcon icon={faPlus} /></button>
                </header>
            </div>
            {form && renderForm()}
            <div className="watchlists">
                {!!props.watchlists.length && allWatchlists()}
            </div>
        </div>
    )
}