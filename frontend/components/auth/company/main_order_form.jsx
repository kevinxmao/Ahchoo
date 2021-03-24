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

    render() {
        if (this.state.loading) return null;
        return (
          <form action="">
            <header>
              <div className="trade-type-container">
                <div className="trade-type">
                  <span>
                    {"Buy"} {this.props.ticker}
                  </span>
                </div>
                {this.state.isHolding && (
                  <div className="trade-type">
                    <span>
                      {"Sell"} {this.props.ticker}
                    </span>
                  </div>
                )}
              </div>
              <p>{this.state.isHolding ? "yes" : "no"}</p>
            </header>
            <div className="input-main">
              <div className="invest-type"></div>
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