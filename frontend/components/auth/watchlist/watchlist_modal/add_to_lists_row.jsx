import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/pro-regular-svg-icons';

export default function AddToListsRow(props) {
    const checkSq = <FontAwesomeIcon icon={faCheckSquare} />;
    const box = <FontAwesomeIcon icon={faSquare} />;

    // function inWatchlist() {
    //     return props.tickers.findIndex(ticker => ticker.ticker === props.toAdd) !== -1;
    // }

    return (
        <button onClick={() => props.handleSelect(props.id)}>
            <div>{props.inWatchlist ? checkSq : box}</div>
            <div>
                <div><span>{props.name}</span></div>
                <div>{props.tickers.length} {props.tickers.length === 1 ? "item" : "items" }</div>
            </div>
        </button>
    );
}