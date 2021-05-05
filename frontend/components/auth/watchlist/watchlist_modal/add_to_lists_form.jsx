import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddToListsRow from './add_to_lists_row';
import { closeModal } from '../../../../actions/modal_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';
import { tickerInWatchlists, objEqual } from '../../../../util/util_functions';
import { updateWatchlist } from '../../../../actions/watchlists_actions';

export default function AddToListsForm(props) {
    const watchlists = useSelector(state => Object.assign({}, state.entities.watchlists));
    const dispatch = useDispatch();
    const fixedStatus = Object.freeze(tickerInWatchlists(props.tickerSymbol, watchlists));
    const [status, setStatus] = useState(tickerInWatchlists(props.tickerSymbol, watchlists));

    function handleSelect(watchlistId) {
        setStatus(Object.assign({}, status, { [watchlistId]: !status[watchlistId]}));
    }

    function renderWatchlists() {
        return Object.keys(watchlists).map(key => 
            <AddToListsRow key={key} {...watchlists[key]} inWatchlist={status[key]} handleSelect={handleSelect}/>
        )
    }

    function handleSubmit() {
        let reqWatchlists = [];
        for (let id in fixedStatus) {
            if (fixedStatus[id] !== status[id]) {
                const newWatchlist = Object.assign({}, watchlists[id]);
                const tickersArr = newWatchlist.tickers;

                if (status[id]) {
                    tickersArr.push({ticker: props.tickerSymbol});
                } else {
                    const index = tickersArr.findIndex(ele => ele.ticker === props.tickerSymbol);
                    tickersArr.splice(index, 1);
                }

                newWatchlist.tickers = tickersArr;
                reqWatchlists.push(newWatchlist);
            }
        }

        // debugger;
        Promise.all(reqWatchlists.map(watchlist => dispatch(updateWatchlist(watchlist)))).then(() => console.log('all done'));

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
                <button className="btn watchlist-add" onClick={handleSubmit} disabled={objEqual(fixedStatus, status)}><span>Save Changes</span></button>
            </footer>
        </div>
    )
}