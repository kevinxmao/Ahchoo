import React from 'react';
import { formatNumber, formatPercent } from "../../../util/util_functions";
import DashboardSidebar from './dashboard_sidebar';
import { fetchAllQuotes } from '../../../util/companies/data_api_util';
import DashboardChart from './dashboard_chart';

class PortfolioMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      portfolioValue: 0,
      change: 0,
      percentChange: 0,
      rangeData: null,
      data: null,
      chartData: null,
    };
    this.calculatePortfolioValue = this.calculatePortfolioValue.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
    this.calculatePercentChange = this.calculatePercentChange.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchUser(this.props.user.id)
      .then(() => {
        if (!this.props.holdings.length) {
          this.setState({ loading: false, portfolioValue: this.props.user.funds }, window.localStorage.setItem("portfolioValue", `${this.props.user.funds}`));
          return;
        }
        fetchAllQuotes(this.props.holdings.map((holding) => holding.ticker))
          .then((responseJSON) =>
            this.setState({ data: responseJSON }, this.calculatePortfolioValue)
          );
      }
      )
  }

  calculatePortfolioValue() {
    let sum = this.props.user.funds;
    this.props.holdings.forEach((holding) => {
      sum += holding.quantity * this.state.data[holding.ticker].price;
    });
    this.setState({ portfolioValue: sum }, this.calculateChange);
    window.localStorage.setItem("portfolioValue", `${sum}`);
  }

  calculateChange() {
    let openSum = this.props.user.funds;
    this.props.holdings.forEach((holding) => {
      openSum +=
        holding.quantity *
        this.state.data[holding.ticker]["intraday-prices"][0].open;
        //marketOpen or open
    });

    this.setState({ change: this.state.portfolioValue - openSum }, () =>
      this.calculatePercentChange(openSum)
    );
  }

  calculatePercentChange(openValue) {
    const {change} = this.state;
    const percentage = change / openValue;
    this.setState({percentChange: percentage, loading: false});
  }

  formatIntradayData() {
    const {data} = this.state;
    
  }

  formatChartData() {
    const {data} = this.state;
    const chartData = [];
    this.props.holdings.forEach((holding))
  }

  render() {
    if (this.state.loading) return null;
    const {portfolioValue, change, percentChange, data} = this.state;
    return (
      <>
        <div className="portfolio-main">
          <div className="portfolio-value-container">
            <header className="portfolio-value">
              <div className="portfolio-number">
                <h1>{formatNumber(portfolioValue)}</h1>
              </div>
              <div className="portfolio-change-container">
                <div className="portfolio-change">
                  <span>
                    {change >= 0
                      ? `+${formatNumber(change)}`
                      : `-${formatNumber(change)}`}
                  </span>
                </div>
                <div className="portfolio-percent-change">
                  <span>
                    {percentChange >= 0
                      ? `+${formatPercent(percentChange)}`
                      : `-${formatPercent(percentChange)}`}
                  </span>
                </div>
              </div>
            </header>
          </div>
          <div className="dashboard-chart-container">
            <DashboardChart />
          </div>
          <div className="buying-power-container"></div>
        </div>
        <div className="dashboard-sidebar">
          <div>
            <DashboardSidebar holdings={this.props.holdings} apiData={data} />
          </div>
        </div>
      </>
    );
  }
}

export default PortfolioMain;