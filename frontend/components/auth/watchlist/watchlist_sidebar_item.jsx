import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTimesCircle, faEllipsisH } from '@fortawesome/pro-regular-svg-icons';
import { openModal } from '../../../actions/modal_actions';
import { Link } from 'react-router-dom';

export default function WatchlistSidebarItem(props) {
    const dispatch = useDispatch();
    const [dropdown, setDropdown] = useState(false);
    const ellipsis = <FontAwesomeIcon icon={faEllipsisH}/>

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

    function handleOpenModal(event, mode) {
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        dispatch(openModal(`${mode}-list-${props.watchlist.id}`));
        setDropdown(false);
    }

    function renderDropdown() {
        return (
            <div className="watchlist-dropdown" onClick={handleBodyclick}>
                <div>
                    <button onClick={(e) => handleOpenModal(e, 'edit')}>
                        <div className="dropdown-icon"><FontAwesomeIcon icon={faCog} /></div>
                        <span>Edit List</span>
                    </button>
                    <button onClick={(e) => handleOpenModal(e, 'delete')}>
                        <div className="dropdown-icon"><FontAwesomeIcon icon={faTimesCircle} /></div>
                        <span>Delete List</span>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="watchlist">
            <Link to={`/auth/watchlists/${props.watchlist.id}`} className="watchlist-title-button">
                <div className="watchlist-title">
                    <header>
                        <div className="watchlist-name" >
                            <span>{props.watchlist.name}</span>
                        </div>
                        <div className="watchlist-title-nav">
                            <button className={dropdown ? "list-overflow _defaultGreen active" : "list-overflow _defaultGreen"} onClick={handleOverflowClick}>{ellipsis}</button>
                        </div>
                    </header>
                    {dropdown && renderDropdown()}
                </div>
            </Link>
        </div>
    )
}