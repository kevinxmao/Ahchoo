import React from "react";
import ReactDOM from 'react-dom';
import { formatNumber, formatPercent } from "../../../util/util_functions";

const CustomToolTip = ({ active, payload, label, referenceValue, componentRef }) => {
    const sum = componentRef.sumRef.current;
    const sumHover = componentRef.sumHoverRef.current;
    const changeEle = componentRef.changeRef.current;
    const changeHoverEle = componentRef.changeHoverRef.current;
    const percent = componentRef.percentRef.current;
    const percentHover = componentRef.percentHoverRef.current;

    if (active && payload && payload.length) {
        const change = payload[0].payload.value - referenceValue;
        const percentChange = change / referenceValue;

        sum.classList.add('hide');
        sumHover.innerText = formatNumber(payload[0].payload.value);
        changeEle.classList.add('hide');
        changeHoverEle.innerText = change >= 0
            ? `+${formatNumber(change)}`
            : `-${formatNumber(change)}`;
        percent.classList.add('hide');
        percentHover.innerText = percentChange >= 0
            ? `(+${formatPercent(percentChange)})`
            : `(-${formatPercent(percentChange)})`;

        return (
            <div className="custom-tooltip">
                <p>{label}</p>
            </div>
        )
    } else if (!active) {
        sum.classList.remove('hide');
        sumHover.innerText = "";
        changeEle.classList.remove('hide');
        changeHoverEle.innerText = "";
        percent.classList.remove('hide');
        percentHover.innerText = "";
    }
    return null;

}

export default CustomToolTip;