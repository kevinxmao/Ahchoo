import React, { useState } from 'react';
import WatchlistSidebar from './watchlist_sidebar';
import { useSelector, useDispatch } from 'react-redux';

export default function WatchlistMain(props) {
    const watchlist = useSelector(state => state.entities.watchlists[props.id]);
    const [edit, setEdit] = useState(false);
    const name = useFormInput(watchlist.name);
    const dispatch = useDispatch();

    function renderEmpty() {
        
    }

    function useFormInput(initialValue) {
        const [value, setValue] = useState(initialValue);

        function handleChange(e) {
            setValue(e.target.value);
        }

        return {
            value,
            onChange: handleChange
        }
    }

    function renderNameField() {
        if(edit) {
            return (
                <form onBlur={(watchlist.name !== name.value) ? () => console.log("change") : () => {}}>
                    <input type="text" value={name} {...name}/>
                </form>
            )
        } else {
            return (
                <div>
                    <span>{watchlist.name}</span>
                </div>
            )
        }
    }

    debugger;
    return (
        <>
            <div className="watchlist-main">
                <header>
                    <div className="main-watchlist-name">{renderNameField()}</div>
                    <div><span>{watchlist.tickers.length} {watchlist.tickers.length === 1 ? "item" : "item"}</span></div>
                </header>
            </div>
            <div className="watchlist-sidebar">
                <div>
                    <WatchlistSidebar />
                </div>
            </div>
        </>
    )
}