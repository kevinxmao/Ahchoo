import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createWatchlist } from '../../../../../actions/watchlists_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faSpinner } from '@fortawesome/pro-regular-svg-icons';
import { clearErrors } from '../../../../../actions/session_actions';

export default function NewWatchlistForm(props) {
    const name = useFormInput("");
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.id);
    const errors = useSelector(state => state.errors.watchlist);

    function submitForm() {
        const watchlist = { userId, name: name.value };
        ReactDOM.render(<FontAwesomeIcon icon={faSpinner} spin size="lg" />, document.querySelector("button.btn.watchlist-cancel"))
        ReactDOM.render(<FontAwesomeIcon icon={faSpinner} spin size="lg" />, document.querySelector("button.btn.watchlist-new"))
        dispatch(createWatchlist(watchlist)).then(
            () => props.closeForm(),
            () => {
                ReactDOM.render(<span>Cancel</span>, document.querySelector("button.btn.watchlist-cancel"));
                ReactDOM.render(<span>Create List</span>, document.querySelector("button.btn.watchlist-new"));
            }
        );
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
                    <input type="text" placeholder="List Name" {...name} className={!!errors.length ? "red" : ""} onFocus={() => dispatch(clearErrors())}/>
                    {!!errors.length && renderErrors()}
                </div>
                <footer>
                    <button className="btn watchlist-cancel" onClick={props.closeForm}>Cancel</button>
                    <button className="btn watchlist-new" onClick={submitForm}>Create List</button>
                </footer>
            </form>
        </div>
    )
}