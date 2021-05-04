import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../../actions/modal_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExclamationCircle, faSpinner } from '@fortawesome/pro-regular-svg-icons';
import { updateWatchlist } from '../../../../../actions/watchlists_actions';
import { clearErrors } from '../../../../../actions/session_actions';

export default function EditForm(props) {
    const dispatch = useDispatch();
    const watchlist = useSelector(state => Object.assign({}, state.entities.watchlists[props.id]));
    const name = useFormInput(watchlist.name);
    const errors = useSelector(state => state.errors.watchlist)
    
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
        return (<div className="edit-errors">
            <div>
                <div className="icon">
                    <FontAwesomeIcon icon={faExclamationCircle} />
                </div>
                <span>{errors}</span>
            </div>
        </div>)
    }

    function submitForm() {
        watchlist.name = name.value;
        ReactDOM.render(<FontAwesomeIcon icon={faSpinner} spin size="lg" />, document.querySelector("button.btn.watchlist-edit"))
        dispatch(updateWatchlist(watchlist)).then(
            () => dispatch(closeModal()),
            () => ReactDOM.render(<span>Save</span>, document.querySelector("button.btn.watchlist-edit"))
        )
    }

    return (
        <div className="edit-watchlist">
            <header className="modal-title">
                <div className="edit-title">
                    <span>Edit List</span>
                </div>
                <button onClick={() => dispatch(closeModal())} className="close-btn">
                    <span><FontAwesomeIcon icon={faTimes} /></span>
                </button>
            </header>
            <form>
                <input type="text" {...name} className={!!errors.length ? "red" : ""} onFocus={() => dispatch(clearErrors())}/>
                {!!errors.length && renderErrors()}
                <button className="btn watchlist-edit" onClick={submitForm}><span>Save</span></button>
            </form>
        </div>
    )
}