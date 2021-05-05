import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/pro-regular-svg-icons';
import { faCheckSquare } from '@fortawesome/pro-solid-svg-icons';

export default function AddToListsRow(props) {
    const checkSq = <FontAwesomeIcon icon={faCheckSquare} />;
    const box = <FontAwesomeIcon icon={faSquare} />;

    function handleSelect(event) {
        event.preventDefault();
        event.stopPropagation();
        props.handleSelect(props.id);
    }

    return (
        <button onClick={handleSelect} className="btn watchlist-select">
            <div className="checkbox">{props.inWatchlist ? checkSq : box}</div>
            <div className="watchlist-header-box">
                <div className="watchlist-header-title"><span>{props.name}</span></div>
                <div className="watchlist-header-subtitle">{props.tickers.length} {props.tickers.length === 1 ? "item" : "items" }</div>
            </div>
        </button>
    );
}