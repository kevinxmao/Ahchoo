import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ItemChart from "../holdings_index/item_chart";
import { formatNumber, formatPercent } from "../../../../util/util_functions";

export default function WatchlistItem(props) {
    const color = change >= 0 ? "#00c807" : "#ff5000";

    useEffect(() => {
        
    })

    return (
        <Link to={`/auth/tickers/${ticker}`} className="sidebar-list-item">
            <div className="ticker-symbol">
                <span>{ticker}</span>
            </div>
            <div className="list-item-chart">
                <ItemChart referenceValue={open} data={chartData} change={change} />
            </div>
            <div className="holding-price">
                <div className="list-current-price">
                    <span>{`${formatNumber(market)}`}</span>
                </div>
                <div className="list-percent-change">
                    <span style={{ color: `${color}` }}>
                        {percentChange >= 0
                            ? `+${formatPercent(percentChange)}`
                            : `-${formatPercent(percentChange)}`}
                    </span>
                </div>
            </div>
        </Link>
    )
}