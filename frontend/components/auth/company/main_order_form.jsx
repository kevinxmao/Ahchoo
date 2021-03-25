import React from 'react';
import { ownShare } from '../../../util/util_functions';
import SellSharesForm from './order_forms/sell_shares';
import BuySharesForm from './order_forms/buy_shares';

class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isHolding: false,
            inWishLists: false,
            mode: "buy",
            type: "shares"
        }
    }

    componentDidMount() {
        const {holdings, ticker} = this.props;
        this.setState({isHolding: ownShare(holdings, ticker), loading: false});
    }

    componentDidUpdate(prevProps, prevState) {
      const { holdings, ticker, user } = this.props;
      const isHolding = holdings.some(holding => holding.ticker === ticker);

      if (isHolding !== prevState.isHolding && prevProps.user.funds !== user.funds) {
        this.setState({isHolding: isHolding, mode: "buy", type: "shares"})
      }
    }

    handleChange(e) {
      this.setState({})
    }

    selectMode(mode) {
      if (this.state.mode !== mode) {
        this.setState({mode: mode});
      }
    }

    render() {
        if (this.state.loading) return null;
        const {user, holdings, ticker, price, createHolding, updateHolding, deleteHolding} = this.props;
        const {isHolding, loading, mode, type} = this.state;
        return (
          <div>
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
              <div className="invest-type">
                <label className="input-label" htmlFor="type">Invest In</label>
                <div>
                  <select name="type" id="type" onChange={this.handleChange}>
                    <option value="shares">Shares</option>
                    <option value="dollars" disabled>Dollars</option>
                  </select>
                </div>
              </div>
              <div className="input-main">
              {(mode === "sell" && type === "shares") && <SellSharesForm user={user} holdings={holdings} ticker={ticker} price={price} updateHolding={updateHolding} deleteHolding={deleteHolding} />}
              {(mode === "buy" && type === "shares") && <BuySharesForm user={user} holdings={holdings} isHolding={isHolding} ticker={ticker} price={price} updateHolding={updateHolding} createHolding={createHolding} />}
              </div>
            </div>
        );
    }
}

export default OrderForm;