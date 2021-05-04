import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createWatchlist } from '../../../../../actions/watchlists_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/pro-regular-svg-icons';

export default function NewWatchlistForm(props) {
    const name = useFormInput("");
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.id);
    const errors = useSelector(state => state.errors.watchlist);

    function submitForm() {
        const watchlist = { userId, name: name.value };
        dispatch(createWatchlist(watchlist)).then(() => props.closeForm());
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

    function renderErrors() {
        return (<div className="create-errors">
                    <div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faExclamationCircle} />
                        </div>
                        <span>{errors}</span>
                    </div>
                </div>)
    }

    return (
        <div className="new-watchlist-form">
            <form>
                <div className="new-watchlist-name">
                    <input type="text" placeholder="List Name" {...name} className={!!errors.length ? "red" : ""}/>
                    {!!errors.length && renderErrors()}
                </div>
                <footer>
                    <button onClick={props.closeForm}>Cancel</button>
                    <button onClick={submitForm}>Create List</button>
                </footer>
            </form>
        </div>
    )
}