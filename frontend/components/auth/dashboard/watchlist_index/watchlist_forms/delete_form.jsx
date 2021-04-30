import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../../actions/modal_actions';
import { deleteWatchlist } from '../../../../../actions/watchlists_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';

export default function DeleteForm(props) {
    const dispatch = useDispatch();
    const watchlist = useSelector(state => state.entities.watchlists[props.id]);
    const [name, setName] = useState(watchlist.name);
    const [tickers, setTickers] = useState(watchlist.tickers);

    function submitForm() {
        dispatch(deleteWatchlist(watchlist.id)).then(dispatch(closeModal()));
    }

    return (
        <div className="delete-watchlist">
            <header className="modal-title">
                <div>
                    <span>Are you sure you want to delete "{name}"?</span>
                </div>
                <button onClick={() => dispatch(closeModal())} className="close-btn">
                    <span><FontAwesomeIcon icon={faTimes} /></span>
                </button>
            </header>
            <div>
                <div className="delete-warning">
                    <span>If you delete this list and {tickers.length} {tickers.length == 1 ? "item" : "items"}, it'll be gone forever! </span>
                </div>
                <button onClick={submitForm}><span>Delete {name}</span></button>
            </div>
        </div>
    )
}