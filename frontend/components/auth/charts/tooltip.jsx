import React from "react";
import ReactDOM from 'react-dom';

const CustomToolTip = ({active, payload, label}) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p>Hello</p>
            </div>
        )
    }

    return null;
}

export default CustomToolTip;