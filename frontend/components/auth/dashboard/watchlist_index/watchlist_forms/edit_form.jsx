import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function EditForm(props) {
    const dispatch = useDispatch();
    const watchlist = useSelector(state => state.entities.watchlists[props.id]);

    return (
        <div><span>{watchlist.name}</span></div>
    )
}