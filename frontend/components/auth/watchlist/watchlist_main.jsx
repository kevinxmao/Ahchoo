import React, { useState, useEffect } from 'react';
import WatchlistSidebar from './watchlist_sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { updateWatchlist } from '../../../actions/watchlists_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faTimesCircle } from '@fortawesome/pro-regular-svg-icons';
import WatchlistTable from './watchlist_table';
import { openModal } from '../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

function WatchlistMain(props) {
    const watchlist = useSelector(state => Object.assign({}, state.entities.watchlists[props.id]));
    const [edit, setEdit] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const name = useFormInput(watchlist.name);
    const dispatch = useDispatch();

    function renderTable() {
        if (watchlist.tickers.length === 0) {
            return (
                <div className="empty-table">
                    <header><span>Feels a little empty in here...</span></header>
                    <footer><span>Search for companies to add and stay up to date.</span></footer>
                </div>
            )
        } else {
            return <WatchlistTable watchlist={watchlist} tickers={watchlist.tickers}/>
        }
    }

    function useFormInput(initialValue) {
        const [value, setValue] = useState(initialValue);

        useEffect(() => {
            setValue(initialValue)
        }, [initialValue]);

        function handleChange(e) {
            setValue(e.target.value);
        }

        return {
            value,
            onChange: handleChange
        }
    }

    function handleOnblur() {
        if (name.value === watchlist.name) {
            setEdit(false);
        } else {
            watchlist.name = name.value;
            dispatch(updateWatchlist(watchlist)).then(() => setEdit(false));
        }
    }

    function renderNameField() {
        if(edit) {
            return (
                <form className="watchlist-name-form" onBlur={handleOnblur}>
                    <input type="text" autoFocus {...name}/>
                </form>
            )
        } else {
            return (
                <div className="watchlist-name-form" onClick={() => setEdit(true)}>
                    <div><span>{watchlist.name}</span></div>
                </div>
            )
        }
    }

    function handleOverflowClick(event) {
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        setDropdown(!dropdown);
    }

    function globalClickListener(nativeEvent) {
        setDropdown(false);
    }

    useEffect(() => {
        if (dropdown) {
            window.addEventListener('click', globalClickListener)
        } else {
            window.removeEventListener('click', globalClickListener)
        }
    })

    function handleBodyclick(syntheticEvent) {
        syntheticEvent.stopPropagation();
    }

    function renderDropdown() {
        return (
            <div className="delete-dropdown _defaultGreen" onClick={handleBodyclick}>
                <div>
                    <button onClick={() => dispatch(openModal(`delete-list-${watchlist.id}`))}>
                        <div className="dropdown-icon"><FontAwesomeIcon icon={faTimesCircle} /></div>
                        <span>Delete List</span>
                    </button>
                </div>
            </div>
        )
    }

    if (!Object.values(watchlist).length) return null;

    return (
        <>
            <div className="watchlist-main">
                <header>
                    <div className="main-watchlist-name">
                        {renderNameField()}
                        <div className="watchlist-subtitle">
                            <span>{watchlist.tickers.length} {watchlist.tickers.length === 1 ? "item" : "items"}</span>
                        </div>
                    </div>
                    <div className="icons" onClick={handleOverflowClick}>
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </div>
                    {dropdown && renderDropdown()}
                </header>
                <div className="watchlist-table-container">
                    {renderTable()}
                </div>
            </div>
            <div className="watchlist-sidebar">
                <div>
                    <WatchlistSidebar />
                </div>
            </div>
        </>
    )
}

export default WatchlistMain;