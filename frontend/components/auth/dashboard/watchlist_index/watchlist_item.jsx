import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemChart from "../holdings_index/item_chart";
import { formatNumber, formatPercent } from "../../../../util/util_functions";

export default function WatchlistItem(props) {
    const color = change >= 0 ? "#00c807" : "#ff5000";
    const [change, setChange] = useState(null);
    const [percentChange, setPercentChange] = useState(null);
    const [open, setOpen] = useState(null);
    const [market, setMarket] = useState(null);
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        let marketPrice = props.datum.price;
        let openPrice = props.datum["intraday-prices"][0].open || props.datum["intraday-prices"][0].marketOpen;
        setOpen(openPrice);
        setMarket(marketPrice);
        setChange(marketPrice - openPrice);
        setPercentChange(change / open);
        setChartData(formatChartData(props.datum));
    }, [props.datum])

    function formatChartData(datum) {
        const chartData = {};
        let price;
        datum["intraday-prices"].forEach((intraPrice) => {
            const timeKey = [intraPrice.date, intraPrice.minute].join(" ");
            price = intraPrice.average ? intraPrice.average : price;
            chartData[timeKey] = { price };
        });

        let dataArr = [];
        for (let i = 0; i < Object.values(chartData).length; i += 10) {
            dataArr.push(Object.values(chartData)[i]);
        }

        return dataArr;
    }

    if (!chartData) return null;

    debugger
    return (
        <Link to={`/auth/tickers/${props.ticker}`} className="sidebar-list-item">
            <div>
                <div className="ticker-symbol">
                    <span>{props.ticker}</span>
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
            </div>
        </Link>
    )
}