import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../../actions/modal_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';
import { updateWatchlist } from '../../../../../actions/watchlists_actions';

export default function EditForm(props) {
    const dispatch = useDispatch();
    const watchlist = useSelector(state => state.entities.watchlists[props.id]);
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

    function submitForm() {
        watchlist.name = name.value;
        dispatch(updateWatchlist(watchlist)).then(() => dispatch(closeModal()))
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
                <input type="text" {...name}/>
                <button onClick={submitForm}><span>Save</span></button>
            </form>
        </div>
    )
}