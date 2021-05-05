import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function AddToListsForm(props) {
    const watchlists = useSelector(state => Object.assign({}, state.entities.watchlists));
    const dispatch = useDispatch();

    function renderWatchlists() {
        for (let [key, value] in Object.entries(watchlists)) {
        return <div><span>{value.name} {value.tickers.length} items</span></div>
        }
    }

    return (
        <div>
            <div><span>Add {props.tickerSymbol} to your lists</span></div>
            <div>{renderWatchlists()}</div>
        </div>
    )
}