import React from "react";
import ReactDOM from 'react-dom';
import { formatNumber } from "../../../util/util_functions";

const CustomToolTip = ({active, payload, label, referenceValue}) => {
    
    if (active && payload && payload.length) {
        const prevSum = document.getElementById("_sum").innerHTML;
        const prevChange = document.getElementById("_change").innerHTML;
        const prevPercentChange = document.getElementById("_percentChange").innerHTML;

        const change = payload[0].payload.value - referenceValue;
        const percentChange = change / referenceValue;

        ReactDOM.render(<>{formatNumber(payload[0].payload.value)}</>, document.getElementById("_sum"));

        return (
            <div className="custom-tooltip">
                <p>Hello</p>
            </div>
        )
    }

    return null;
}

export default CustomToolTip;