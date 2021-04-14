import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';
import { formatNumber } from '../../../util/util_functions';
import { closeModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';

function DepositForm(props) {
    const [funds, setFunds] = useState("");

    function handleAmount(value="") {
        let str = value.replace(/[^0-9.,]+/g, "");
        let parts = str.split(".");
        if (parts.length > 2) {
            parts = parts.slice(0, 2);
        }

        if (parts.length === 1) {
            str = `$${parts[0]}`;
        } else {
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            str = `$${parts.join(".")}`;
        }

        if (str === "$") str = "";
        setFunds(str);
    }

    return (
        <div className="deposit-form">
            <header className="modal-title">
                <div>
                    <span>Despoit Funds</span>
                </div>
                <button onClick={() => props.closeModal()}>
                    <span><FontAwesomeIcon icon={faTimes} /></span>
                </button>
            </header>
            <form >
                <label>Amount
                    <input type="text" required autoComplete="off" step="1" onChange={e => handleAmount(e.target.value)} value={funds} placeholder="$0.00"/>
                </label>
            </form>
        </div>
    )
}

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(null, mDTP)(DepositForm);