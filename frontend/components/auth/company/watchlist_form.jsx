import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWatchlists } from '../../../actions/watchlists_actions'

export default function WatchlistForm(props) {
    const watchlists = useSelector(state => Object.assign({}, state.entities.watchlists));
    const dispatch = useDispatch();

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

    }

    return (
        <button onClick={handleClick}>
            <div>{inAnyWatchlist() ? "Added to Lists" : "Add to List"}</div>
        </button>
    )
}