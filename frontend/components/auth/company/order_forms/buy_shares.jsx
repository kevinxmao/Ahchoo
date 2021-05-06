import React from 'react';
import { formatNumber } from '../../../../util/util_functions';

class BuySharesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            ticker: this.props.ticker,
            price: this.props.price,
            holdings: this.props.holdings,
            shares: '',
            estimatedCost: 0.00,
            errorMsg: null,
            isHolding: this.props.isHolding
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const input = e.target.value;
        if (!input) {
            this.setState({ shares: '', errorMsg: null })
        } else {
            this.setState({ shares: parseFloat(input), estimatedCost: (parseFloat(input) * this.state.price) })
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.user.funds !== this.props.user.funds || prevProps.user.ticker !== this.props.user.ticker) {
            this.setState({ holdings: this.props.holdings, estimatedCost: 0.00 });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { shares, price, estimatedCost } = this.state;
        const { user, ticker, updateHolding, createHolding, isHolding } = this.props;
        let holding = this.state.holdings.find(holding => holding.ticker === this.state.ticker);

        if (estimatedCost > user.funds) {
            this.setState({ erroMsg: "Not Enough Buy Power" });
        } else if (!isHolding) {
            let order = {user_id: user.id, ticker: ticker, quantity: shares, avgPrice: price};
            createHolding(order);
        } else {
            let order = Object.assign({}, holding, { quantity: shares, avgPrice: price });
            updateHolding(order)
        }
        this.setState({shares: ''});
    }

    render() {
        const { ticker, shares, estimatedCost, errorMsg } = this.state;
        const {price} = this.props
        return (
            <form onSubmit={this.handleSubmit} className="buy-shares-form">
                <div className="amount-input">
                    <label htmlFor="shares">Shares</label>
                    <input type="number" value={shares} placeholder="0" onChange={this.handleChange} />
                </div>
                <div className="price-info">
                    <div className="price-label"><span>Market Price</span></div>
                    <div className="price-value"><span>{`${formatNumber(price)}`}</span></div>
                </div>
                <div className="order-estimate">
                    <div className="estimate-label"><span>Estimated Cost</span></div>
                    <div className="price-value"><span>{`${formatNumber(estimatedCost)}`}</span></div>
                </div>
                <div className="order-form-submit">
                    <button type="submit" disabled={!this.state.shares}>Execute Order</button>
                </div>
                {errorMsg && <div className="order-form-error"><span>{errorMsg}</span></div>}
                <footer className="order-note">
                    <div>
                        {`${formatNumber(this.props.user.funds)}`} {"Buying Power Available"}
                    </div>
                </footer>
            </form>
        )
    }
}

export default BuySharesForm;