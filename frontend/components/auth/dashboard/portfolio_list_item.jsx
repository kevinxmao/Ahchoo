import React from "react";
import { Link } from "react-router-dom";
import { formatNumber, formatPercent } from "../../../util/util_functions";
import { fetchSingleQuote } from "../../../util/companies/data_api_util";

class PortfolioListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      market: undefined,
      open: undefined,
    };
    this.calcChange = this.calcChange.bind(this);
    this.calcPercentChange = this.calcPercentChange.bind(this);
  }

  calcChange() {
      const {market, open} = this.state;
      return market - open;
  }

  calcPercentChange() {
      const { market, open } = this.state;
      let percentage = (this.calcChange()) / open * 100.0;
      return percentage;
  }

  componentDidMount() {
      let ticker = this.props.holding.ticker;
      fetchSingleQuote(ticker).then(
          responseJSON => {
              let res = responseJSON[ticker];
              const {mark, openPrice} = res;
              this.setState({loading: false, market: mark, open: openPrice})
          }
      );
  }

  render() {
    const { ticker, quantity } = this.props.holding;
    const toRender = this.state.loading ? null : (
      <Link to={`/tickers/${ticker}`}>
        <div className="holding-info">
          <div>
            <span>{ticker}</span>
          </div>
          <div>
            <span>{quantity >= 1 ? `${quantity} shares` : `1 share`}</span>
          </div>
        </div>
        <div className="holding-price">
            <div className="list-current-price">
                <span>{formatNumber(this.state.market)}</span>
            </div>
            <div className="list-percent-change">
                <span>{formatPercent(this.calcPercentChange())}</span>
            </div>
        </div>
      </Link>
    );

    return toRender;
  }
}

export default PortfolioListItem;
