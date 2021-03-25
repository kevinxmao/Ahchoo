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
      console.log(isHolding)

      if (isHolding !== prevState.isHolding || prevProps.user.funds !== user.funds) {
        debugger
        this.props.fetchUser(user.id).then(
          () => this.setState({ isHolding: isHolding, mode: "buy", type: "shares" }, console.log(this.state))
        )
      }
    }

    componentWillUnmount() {
      console.log("unmounted")
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
              <div className="trade-mode-container">
                <div className={(isHolding && mode === "buy") ? 'trade-mode active' : 'trade-mode'} onClick={() => this.selectMode("buy")}>
                  <span>
                    {"Buy"} {this.props.ticker}
                  </span>
                </div>
                {isHolding && (
                  <div className={(mode === "sell") ? 'trade-mode active' : 'trade-mode'} onClick={() => this.selectMode("sell")}>
                    <span>
                      {"Sell"} {this.props.ticker}
                    </span>
                  </div>
                )}
              </div>
            </header>
            <div className="input-main">
              <div className="invest-type">
                <label className="input-label" htmlFor="type">Invest In</label>
                <div>
                  <select name="type" id="type" onChange={this.handleChange}>
                    <option value="shares">Shares</option>
                    <option value="dollars" disabled>Dollars</option>
                  </select>
                </div>
              </div>
              
              {(isHolding && (mode === "sell" && type === "shares")) && <SellSharesForm user={user} holdings={holdings} ticker={ticker} price={price} updateHolding={updateHolding} deleteHolding={deleteHolding} />}
              {(mode === "buy" && type === "shares") && <BuySharesForm user={user} holdings={holdings} isHolding={isHolding} ticker={ticker} price={price} updateHolding={updateHolding} createHolding={createHolding} />}
            </div>
          </div>
        );
    }
}

export default OrderForm;