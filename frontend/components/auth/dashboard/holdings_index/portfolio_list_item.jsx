import React from "react";
import { Link } from "react-router-dom";
import { formatNumber, formatPercent } from "../../../../util/util_functions";
import ItemChart from "./item_chart";

class PortfolioListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      market: null,
      open: null,
      change: null,
      percentChange: null,
      loading: true,
      chartData: null
    };
    this.formatChartData = this.formatChartData.bind(this);
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
    }, this.formatChartData);
  }

  formatChartData() {
    const chartData = {};
    let price;
    this.props.datum["intraday-prices"].forEach((intraPrice) => {
      const timeKey = [intraPrice.date, intraPrice.minute].join(" ");
      price = intraPrice.average ? intraPrice.average : price;
      chartData[timeKey] = {timeKey, price};
    });

    let dataArr = [];
    for (let i = 0; i < Object.values(chartData).length; i += 10) {
      dataArr.push(Object.values(chartData)[i]);
    }

    this.setState({ chartData: dataArr, loading: false});
  }

  render() {
    if (this.state.loading) return null;
    const { ticker, quantity } = this.props.holding;
    const { market, percentChange, chartData, open, change } = this.state;

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
            <ItemChart referenceValue={open} data={chartData} change={change}/>
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
