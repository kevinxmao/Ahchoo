import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createWatchlist } from '../../../../actions/watchlists_actions';

export default function NewWatchlistForm(props) {
    const name = useFormInput("");

    function submitForm(e) {
        
    }

    function useFormInput(initialValue) {
        const [value, setValue] = useState(initialValue);

        function handleNameChange(e) {
            setName(e.target.value);
        }

        return {
            name,
            onChange: handleNameChange
        }
    }

    return (
        <div className="new-watchlist-form">
            <form>
                <div className="new-watchlist-name">
                    <input type="text" placeholder="List Name" {...name} />
                </div>
                <footer>
                    <button onClick={() => setForm(false)}>Cancel</button>
                    <button onClick={(e) => submitForm(e)}>Create List</button>
                </footer>
            </form>
        </div>
    )
}

// const mDTP = dispatch => ({
//     createWatchlist: (watchlist) => dispatch(createWatchlist(watchlist))
// })

// export default connect(null, mDTP)(NewWatchlistForm);