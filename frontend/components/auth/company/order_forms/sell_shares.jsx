import React from 'react';
import { formatNumber } from '../../../../util/util_functions';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/pro-regular-svg-icons';

class SellSharesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            ticker: this.props.ticker,
            price: this.props.price,
            holdings: this.props.holdings,
            shares: '',
            estimatedCredit: 0.00,
            errorMsg: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.calcSharesOwned = this.calcSharesOwned.bind(this);
        this._isMounted = false;
    }

    handleChange(e) {
        const input = e.target.value;
        if (!input) {
            this.setState({shares: '', errorMsg: null})
        } else {
            this.setState({ shares: parseFloat(input), estimatedCredit: (parseFloat(input) * this.state.price)})
        }
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentDidUpdate(prevProps) {
        if (!this._isMounted) {
            return;
        }
        if (prevProps.user.funds !== this.props.user.funds) {
            this.setState({holdings: this.props.holdings});
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleSubmit(e) {
        e.preventDefault();
        ReactDOM.render(<FontAwesomeIcon icon={faSpinner} spin size="lg" />, document.querySelector("button.btn.sell"));
        const { shares, price } = this.state;
        const { user, ticker, updateHolding, deleteHolding } = this.props;
        let holding = this.state.holdings.find(holding => holding.ticker === this.state.ticker);
        const sharesOwned = this.calcSharesOwned();

        if (shares > sharesOwned) {
            this.setState({erroMsg: "Not Enough Shares"});
        } else if (shares === sharesOwned) {
            deleteHolding(holding.id).then(() => this.setState({ shares: '' }));
        } else {
            let order = Object.assign({}, holding, {quantity: (shares * -1.0), avgPrice: price});
            updateHolding(order).then(() => this.setState({ shares: '' }));
        }
    }

    calcSharesOwned() {
        let holding = this.state.holdings.find(holding => holding.ticker === this.state.ticker);
        return holding.quantity;
    }

    render() {
        const {ticker, price, shares, estimatedCredit, errorMsg} = this.state;
        return (
            <form onSubmit={this.handleSubmit} className="sell-shares-form">
                <div className="amount-input">
                    <label htmlFor="shares">Shares</label>
                    <input type="number" value={shares} placeholder="0" onChange={this.handleChange}/>
                </div>
                <div className="price-info">
                    <div className="price-label"><span>Market Price</span></div>
                    <div className="price-value"><span>{`${formatNumber(price)}`}</span></div>
                </div>
                <div className="order-estimate">
                    <div className="estimate-label"><span>Estimated Credit</span></div>
                    <div className="price-value"><span>{`${formatNumber(estimatedCredit)}`}</span></div>
                </div>
                <div className="order-form-submit">
                    <button type="submit" className="btn sell" disabled={!this.state.shares}>Execute Order</button>
                </div>
                {errorMsg && <div className="order-form-error"><span>{errorMsg}</span></div>}
                <footer className="order-note">{this.calcSharesOwned()} {"Shares Available"}</footer>
            </form>
        )
    }
}

export default SellSharesForm;