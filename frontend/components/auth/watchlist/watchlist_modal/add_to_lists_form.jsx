import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddToListsRow from './add_to_lists_row';
import { closeModal } from '../../../../actions/modal_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';
import { tickerInWatchlists } from '../../../../util/util_functions';

export default function AddToListsForm(props) {
    const watchlists = useSelector(state => Object.assign({}, state.entities.watchlists));
    const dispatch = useDispatch();
    const [status, setStatus] = useState(tickerInWatchlists(props.tickerSymbol, watchlists));

    function handleSelect(watchlistId) {
        setStatus(Object.assign({}, status, { [watchlistId]: !status[key]}));
        debugger;
    }

    function renderWatchlists() {
        return Object.keys(watchlists).map(key => 
            <AddToListsRow key={key} {...watchlists[key]} inWatchlist={status[key]} handleSelect={handleSelect}/>
        )
    }


    function handleSubmit() {
        return;
    }

    return (
        <div className="addTo-watchlists">
            <header className="modal-title">
                <div className="addTo-title">
                    <span>Add {props.tickerSymbol} to your lists</span>
                </div>
                <button onClick={() => dispatch(closeModal())} className="close-btn">
                    <span><FontAwesomeIcon icon={faTimes} /></span>
                </button>
            </header>
            <div className="addTo-watchlist-table">
                {renderWatchlists()}
            </div>
            <footer>
                <button className="btn watchlist-add" onClick={handleSubmit}><span>Save Changes</span></button>
            </footer>
        </div>
    )
}