import React from 'react';
import { formatNumber, formatPercent } from "../../../util/util_functions";
import DashboardSidebar from './dashboard_sidebar';
import { fetchAllQuotes } from '../../../util/companies/data_api_util';
import DashboardChart from './dashboard_chart';
import BuyingPowerButton from './buying_power';
import LoadingPage from '../../loading_page';

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
      referenceValue: null,
    };
    this.calculatePortfolioValue = this.calculatePortfolioValue.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
    this.calculatePercentChange = this.calculatePercentChange.bind(this);
    this.formatIntradayData = this.formatIntradayData.bind(this);
    this.formatChartData = this.formatChartData.bind(this);
  }

  componentDidMount() {
    this.setState({ portfolioValue: this.props.portfolioValue });
    this.props
      .fetchUser(this.props.user.id)
      .then(() => {
        if (!this.props.holdings.length) {
          this.setState({ loading: false, portfolioValue: this.props.user.funds }, this.calculatePortfolioValue);
          return;
        }
        fetchAllQuotes(this.props.holdings.map((holding) => holding.ticker))
          .then((responseJSON) =>
            this.setState({ data: responseJSON }, this.formatIntradayData)
          );
      }
      )
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.portfolioValue !== this.props.portfolioValue) this.setState({portfolioValue: this.props.portfolioValue});
    // window.localStorage.setItem("portfolioValue", `${this.state.portfolioValue}`);
  }

  calculatePortfolioValue() {
    let sum = this.props.user.funds;
    if (this.props.holdings.length) {
      this.props.holdings.forEach((holding) => {
        sum += holding.quantity * this.state.data[holding.ticker].price;
      });
    }
    this.setState({ portfolioValue: sum }, this.calculateChange);
    this.props.receivePortfolioValue(sum);
    // window.localStorage.setItem("portfolioValue", `${sum}`);
  }

  calculateChange() {
    let openSum = this.props.user.funds;
    this.props.holdings.forEach((holding) => {
      let openPrice =
        this.state.data[holding.ticker]["intraday-prices"][0].average ||
        this.state.data[holding.ticker]["intraday-prices"][4].open;
      openSum +=
        holding.quantity *
        openPrice;
    });
    this.setState({ change: this.state.portfolioValue - openSum, referenceValue: openSum }, () =>
      this.calculatePercentChange(openSum)
    );
  }

  calculatePercentChange(openValue) {
    const {change} = this.state;
    const percentage = change / openValue;
    this.setState({percentChange: percentage, loading: false});
  }

  formatIntradayData() {
    const chartData = {};
    const holdings = {};
    this.props.holdings.forEach(
      item => holdings[item.ticker] = item
    )

    for (const [ticker, datum] of Object.entries(this.state.data)) {
      const {quantity} = holdings[ticker];

      let price;
      datum["intraday-prices"].forEach( intraPrice => {
        // const timeKey = [intraPrice.date, intraPrice.label].join(" ");
        const timeKey = intraPrice.label;
        price = intraPrice.average ? intraPrice.average : price;

        if (!chartData[timeKey]) {
          chartData[timeKey] = {timeKey, value: (price * quantity + this.props.user.funds)};
        } else {
          chartData[timeKey].value += price * quantity;
        }
      })
    }

    let dataArr = [];
    for (let i = 0; i < Object.values(chartData).length; i += 1) {
      dataArr.push(Object.values(chartData)[i]);
    }

    this.setState({ chartData: dataArr}, this.calculatePortfolioValue);
  }

  formatChartData() {
    const {data} = this.state;
    const chartData = {};
  }

  render() {
    if (this.state.loading) return <LoadingPage />;
    const {portfolioValue, change, percentChange, data, chartData, referenceValue} = this.state;
    const { user, holdings, updateUser } = this.props;
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
                      ? `(+${formatPercent(percentChange)})`
                      : `(-${formatPercent(percentChange)})`}
                  </span>
                </div>
              </div>
            </header>
            <div className="dashboard-chart-container">
              <DashboardChart
                data={chartData}
                change={change}
                portfolioValue={portfolioValue}
                referenceValue={referenceValue}
              />
            </div>
            {(!data) && <div className="initial-chart"><div></div></div>}
          </div>
          <div className="chart-range-container"></div>
          <BuyingPowerButton user={user} updateUser={updateUser}/>
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