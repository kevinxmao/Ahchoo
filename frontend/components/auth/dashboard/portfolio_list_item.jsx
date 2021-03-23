import React from "react";
import { Link } from "react-router-dom";
import { formatNumber, formatPercent } from "../../../util/util_functions";
import { fetchSingleQuote } from "../../../util/companies/data_api_util";

class PortfolioListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      market: undefined,
      open: undefined,
      change: undefined,
      percentChange: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    let marketPrice = this.props.datum.price;
    let openPrice = this.props.datum["intraday-prices"][0].open || this.props.datum["intraday-prices"][0].marketOpen;
    let change = marketPrice - openPrice;
    let percentChange = change / openPrice;
    this.setState({
      market: marketPrice,
      open: openPrice,
      change: change,
      percentChange: percentChange,
      loading: false,
    });
  }

  render() {
    const { ticker, quantity } = this.props.holding;
    const { market, percentChange } = this.state;
    if (this.state.loading) return null;

    return (
      <Link to={`/auth/tickers/${ticker}`} className="sidebar-list-item">
        <div>
          <div className="holding-info">
            <div>
              <span>{ticker}</span>
            </div>
            <div>
              <span>{quantity >= 1 ? `${quantity} shares` : `1 share`}</span>
            </div>
          </div>
          <div className="list-item-chart">
            
          </div>
          <div className="holding-price">
            <div className="list-current-price">
              <span>
                {`${formatNumber(market)}`}
              </span>
            </div>
            <div className="list-percent-change">
              <span>
                {percentChange >= 0
                  ? `+${formatPercent(percentChange)}`
                  : `-${formatPercent(percentChange)}`}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default PortfolioListItem;
