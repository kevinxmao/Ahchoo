import React from "react";
import ReactDOM from 'react-dom';
import { formatNumber } from "../../../util/util_functions";

const CustomToolTip = ({active, payload, label, referenceValue}) => {
    // const prevSumEle = document.getElementById("_sum");
    // const prevChangeEle = document.getElementById("_change");
    // const prevPercentChangeEle = document.getElementById("_percentChange");
    
    if (active && payload && payload.length) {

        // const change = payload[0].payload.value - referenceValue;
        // const percentChange = change / referenceValue;

        // ReactDOM.render(<>{formatNumber(payload[0].payload.value)}</>, document.getElementById("_sum"));

        return (
            <div className="custom-tooltip">
                <p>Hello</p>
            </div>
        )
    } else if (!active) {
        // let prevSum, prevChange, prevPercentChange;

        // prevChange = prevChangeEle.innerHTML || "",
        // prevPercentChange = prevPercentChangeEle.innerHTML || "";
        console.log(payload);

        // if (prevSum) {
        //     prevSum = prevSumEle.innerHTML;
        //     ReactDOM.render(<>{prevSumEle}</>, document.getElementById("_sum"));
        // }
    }
    return null;

}

export default CustomToolTip;