import React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../../../util/util_functions";

class PortfolioListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      last: undefined,
      open: undefined,
    };
  }

  calcChange() {
      const {last, open} = this.state;
      return formatNumber(last-open);
  }

  calcPercentChange() {
      const { last, open } = this.state;
  }

  componentDidMount() {
      
  }

  render() {
    const { ticker, quantity } = this.props.holding;
    return (
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
          <span>{this.props.holding.avgPrice}</span>
        </div>
      </Link>
    );
  }
}

export default PortfolioListItem;
