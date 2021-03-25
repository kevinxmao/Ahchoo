import React from 'react';
import { ownShare } from '../../../util/util_functions';

class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            shares: "",
            isHolding: false,
            inWishLists: false,
            mode: "buy"
        }
    }

    componentDidMount() {
      console.log(this.props)
        const {holdings, ticker} = this.props;
        this.setState({isHolding: ownShare(holdings, ticker), loading: false});
    }

    componentDidUpdate() {

    }

    handleChange(e) {

    }

    selectMode(mode) {
      if (this.state.mode !== mode) {
        this.setState({mode: mode});
        console.log(mode)
      }
    }

    render() {
        if (this.state.loading) return null;
        const {isHolding, loading, mode} = this.state;
        return (
          <form action="">
            <header>
              <div className="trade-type-container">
                <div className={(isHolding && mode === "buy") ? 'trade-type active' : 'trade-type'} onClick={() => this.selectMode("buy")}>
                  <span>
                    {"Buy"} {this.props.ticker}
                  </span>
                </div>
                {isHolding && (
                  <div className={(mode === "sell") ? 'trade-type active' : 'trade-type'} onClick={() => this.selectMode("sell")}>
                    <span>
                      {"Sell"} {this.props.ticker}
                    </span>
                  </div>
                )}
              </div>
              <p>{this.state.isHolding ? "yes" : "no"}</p>
            </header>
            <div className="input-main">
              <div className="invest-type">
                <label className="input-label" htmlFor="type">Invest In</label>
                <div>
                  <select name="type" id="type">
                    <option value="dollar">Dollars</option>
                    <option value="dollar">Shares</option>
                  </select>
                </div>
              </div>
              <div className="invest-shares"></div>
              <div className="market-price"></div>
              <div className="calc-cost"></div>
            </div>
            <div className="order-form-submit">
              <button>Execute Order</button>
            </div>
            <footer className="order-note"></footer>
          </form>
        );
    }
}

export default OrderForm;