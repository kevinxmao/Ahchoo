import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/pro-regular-svg-icons';
import Watchlist from './watchlist';
import NewWatchlistForm from './watchlist_forms/new_watchlist_form';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors } from '../../../../actions/session_actions';

export default function WatchlistIndex(props) {
    const [form, setForm] = useState(false);
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors.watchlist);

    useEffect(() => {
        props.fetchWatchlists()
    }, []);

    function allWatchlists() {
        const {openModal} = props;
        const watchlists = props.watchlists.map(
            watchlist => <Watchlist key={watchlist.id} watchlist={watchlist} openModal={openModal}/>
        )

        return watchlists;
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
        <div className="watchlists-index">
            <div className="sidebar-title" onClick={(form && !!errors.length) ? closeForm : () => {}}>
                <header>
                    <span>Lists</span>
                    <button className="btn new-watchlist" onClick={openForm}><FontAwesomeIcon icon={faPlus} /></button>
                </header>
            </div>
            {form && renderForm()}
            <div className="watchlists">
                {!!props.watchlists.length && allWatchlists()}
            </div>
        </div>
    )
}