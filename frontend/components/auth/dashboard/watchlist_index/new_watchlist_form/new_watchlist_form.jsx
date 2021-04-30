import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createWatchlist } from '../../../../../actions/watchlists_actions';

export default function NewWatchlistForm(props) {
    const name = useFormInput("");
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.id);
    const errors = useSelector(state => state.errors.watchlist)

    function submitForm(e) {
        const watchlist = { userId, name };
        dispatch(createWatchlist(watchlist)).then(console.log('success'));
    }

    function useFormInput(initialValue) {
        const [value, setValue] = useState(initialValue);

        function handleChange(e) {
            debugger;
            setValue(e.target.value);
        }

        return {
            value,
            onChange: handleChange
        }
    }

    return (
        <div className="new-watchlist-form">
            <form>
                <div className="new-watchlist-name">
                    <input type="text" placeholder="List Name" {...name} />
                </div>
                <footer>
                    <button onClick={props.closeForm}>Cancel</button>
                    <button onClick={(e) => submitForm(e)}>Create List</button>
                </footer>
            </form>
        </div>
    )
}