import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/pro-regular-svg-icons';

export default function AddToListsRow(props) {
    const checkSq = <FontAwesomeIcon icon={faCheckSquare} />;
    const checkBx = <FontAwesomeIcon icon={faSquare} />;

    function inWatchlist() {
        return props.tickers.every(ticker => ticker.ticker !== props.self);
    }

    return (
        <div>{inWatchlist()}</div>
    );
}