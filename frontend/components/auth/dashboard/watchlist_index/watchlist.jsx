import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faEllipsisH } from '@fortawesome/pro-regular-svg-icons';

export default function Watchlist(props) {
    const downArrow = <FontAwesomeIcon icon={faAngleDown} />;
    const upArrow = <FontAwesomeIcon icon={faAngleUp} />
    const ellipsis = <FontAwesomeIcon icon={faEllipsisH}/>
    const [expand, setExpand] = useState(false);

    function handleExpandClick() {
        setExpand(!expand)
    }

    function expandedList() {
        return;
    }
    
    return (
        <div className="watchlist">
            <div className="watchlist-title">
                <header>
                    <button className="watchlist-name-button" onClick={() => props.openModal('watchlistName')}>{props.watchlist.name}</button>
                    <div className="watchlist-title-nav">
                        <button className="list-overflow">{ellipsis}</button>
                        <button className="list-expand">{downArrow}</button>
                    </div>
                </header>
            </div>
        </div>
    )
}