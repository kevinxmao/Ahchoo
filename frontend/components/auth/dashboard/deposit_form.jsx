import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';
// import { formatNumber } from '../../../util/util_functions';
import { closeModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import { updateUser } from '../../../actions/users_actions';
import { receivePortfolioValue } from '../../../actions/session_actions';

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

    function handleSubmit() {
        const deposit = parseFloat(funds.split('$')[1]);

        const newFunds = props.user.funds + deposit;
        const newPortfolioValue = props.portfolioValue + deposit;
        debugger;
        const newUser = Object.assign({}, props.user, {funds: newFunds});
        props.updateUser(newUser).then(props.receivePortfolioValue(newPortfolioValue)).then(props.closeModal());
    }

    return (
        <>
            <button onClick={() => props.closeModal()} className="close-btn">
                <span><FontAwesomeIcon icon={faTimes} /></span>
            </button>
            <div className="deposit-form">
                <header className="modal-title">
                    <div>
                        <span>Deposit Funds</span>
                    </div>
                </header>
                <form >
                    <label>From
                        <div>
                            <select name="bank" disabled className="deposit-input">
                                <option value="imgBank">Imaginary Bank</option>
                            </select>
                        </div>
                    </label>
                    <label>Amount
                        <div>
                            <input className="deposit-input" type="text" required autoComplete="off" step="1" onChange={e => handleAmount(e.target.value)} value={funds} placeholder="$0.00" />
                        </div>
                    </label>
                    <button onClick={handleSubmit}><span>Submit</span></button>
                </form>
            </div>
        </>
    )
}

const mSTP = state => ({
    user: Object.values(state.entities.users)[0],
    portfolioValue: state.session.portfolioValue
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    updateUser: (user) => dispatch(updateUser(user)),
    receivePortfolioValue: (value) => dispatch(receivePortfolioValue(value))
})

export default connect(mSTP, mDTP)(DepositForm);