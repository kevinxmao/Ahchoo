import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWatchlists } from '../../../actions/watchlists_actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus } from '@fortawesome/pro-regular-svg-icons';
import { openModal } from '../../../actions/modal_actions';

export default function WatchlistForm(props) {
    const watchlists = useSelector(state => Object.assign({}, state.entities.watchlists));
    const dispatch = useDispatch();
    const check = <FontAwesomeIcon icon={faCheck} />;
    const plus = <FontAwesomeIcon icon={faPlus} />

    // useEffect(() => {
    //     dispatch(fetchWatchlists());
    // }, [props.ticker]);

    function findContainedWatchlists() {
        let res = [];
        for (let [key, value] of Object.entries(watchlists)) {
            if (value.tickers.findIndex((ticker) => ticker.ticker === props.ticker) !== -1) {
                res.push(key);
            }
        }
        return res;
    }

    function inAnyWatchlist() {
        return findContainedWatchlists().length > 0;
    }

    function handleClick() {
        dispatch(openModal(`add-to-list-${props.ticker}`))
    }

    return (
        <button onClick={handleClick}>
            <div className="button-content">
                <div>{inAnyWatchlist() ? check : plus}</div>
                <div>{inAnyWatchlist() ? " Added to Lists" : " Add to List"}</div>
            </div>
        </button>
    )
}