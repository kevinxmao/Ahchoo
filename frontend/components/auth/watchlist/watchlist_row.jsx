import React from 'react';

export default function WatchlistRow(props) {
    return (
        <div>
            <span>{props.symbol} | </span>
            <span>{props.data[props.symbol].name} | </span>
            <span>{props.data[props.symbol].symbol} | </span>
            <span>{props.data[props.symbol].price} | </span>
            <span>{props.data[props.symbol].today} | </span>
            <span>{props.data[props.symbol].marketCap} | </span>
        </div>
    )
}