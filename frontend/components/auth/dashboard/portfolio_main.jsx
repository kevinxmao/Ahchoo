import React from 'react';
import { formatNumber, formatPercent, setTheme } from "../../../util/util_functions";
import DashboardSidebar from './dashboard_sidebar';
import { fetchAllQuotes, fetchWeekQuotes, fetchMonthQuotes, fetchThreeMonthsQuotes, fetchOneYearQuotes, fetchMaxQuotes } from '../../../util/companies/data_api_util';
import DashboardChart from '../charts/dashboard_chart';
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
      range: "1d",
    };
    this.ref = {
      sumRef: React.createRef(),
      sumHoverRef: React.createRef(),
      changeRef: React.createRef(),
      changeHoverRef: React.createRef(),
      percentRef: React.createRef(),
      percentHoverRef: React.createRef()
    }

    this.calculatePortfolioValue = this.calculatePortfolioValue.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
    this.calculatePercentChange = this.calculatePercentChange.bind(this);
    this.formatIntradayData = this.formatIntradayData.bind(this);
    this.formatChartData = this.formatChartData.bind(this);
    this.receiveRangeData = this.receiveRangeData.bind(this);
    this.renderChartRange = this.renderChartRange.bind(this);
    this.receiveIntraday = this.receiveIntraday.bind(this);
  }

  componentDidMount() {
    this.setState({ portfolioValue: this.props.portfolioValue });
    this.props.fetchUser(this.props.user.id).then(() => {
      if (!this.props.holdings.length) {
        this.setState(
          { loading: false, portfolioValue: this.props.user.funds },
          this.calculatePortfolioValue
        );
        return;
      }
      fetchAllQuotes(
        this.props.holdings.map((holding) => holding.ticker)
      ).then((responseJSON) =>
        this.setState({ data: responseJSON }, this.formatIntradayData)
      );
    });
  }

  receiveIntraday() {
    fetchAllQuotes(
      this.props.holdings.map((holding) => holding.ticker)
    ).then((responseJSON) =>
      this.setState({ data: responseJSON }, this.formatIntradayData)
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.portfolioValue !== this.props.portfolioValue)
      this.setState({ portfolioValue: this.props.portfolioValue });
    if (prevProps.theme !== this.props.theme) setTheme(this.props.theme);
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
      openSum += holding.quantity * openPrice;
    });
    this.setState(
      { change: this.state.portfolioValue - openSum, referenceValue: openSum },
      () => {
        this.calculatePercentChange(openSum);

        if (this.state.change < 0) {
          this.props.reddify();
        } else {
          this.props.greenify();
        }
      }
    );
  }

  calculatePercentChange(openValue) {
    const { change } = this.state;
    const percentage = change / openValue;
    this.setState({ percentChange: percentage, loading: false });
  }

  formatIntradayData() {
    const chartData = {};
    const holdings = {};
    this.props.holdings.forEach((item) => (holdings[item.ticker] = item));

    for (const [ticker, datum] of Object.entries(this.state.data)) {
      const { quantity } = holdings[ticker];

      let price;
      datum["intraday-prices"].forEach((intraPrice) => {

        const timeKey = intraPrice.label;
        price = intraPrice.average ? intraPrice.average : price;

        if (!chartData[timeKey]) {
          chartData[timeKey] = {
            timeKey,
            value: price * quantity + this.props.user.funds,
          };
        } else {
          chartData[timeKey].value += price * quantity;
        }
      });
    }

    let dataArr = [];
    for (let i = 0; i < Object.values(chartData).length; i += 1) {
      dataArr.push(Object.values(chartData)[i]);
    }

    this.setState({ chartData: dataArr }, this.calculatePortfolioValue);
  }

  formatChartData(data, key) {
    const chartData = {};
    const holdings = [];
    this.props.holdings.forEach((item) => (holdings[item.ticker] = item));

    for (const [ticker, datum] of Object.entries(data)) {
      const { quantity } = holdings[ticker];

      let price;
      let timeKey;
      datum["chart"].forEach((quote) => {
        if (["3m", "1y", "all"].includes(key)) {
          price = quote.close ? quote.close : price;
          timeKey = quote.label;
        } else {
          price = quote.average ? quote.average : price;
          timeKey = [quote.date, quote.label].join(" ");
        }

        if (!chartData[timeKey]) {
          chartData[timeKey] = {
            timeKey,
            value: price * quantity + this.props.user.funds,
          };
        } else {
          chartData[timeKey].value += price * quantity;
        }
      });
    }

    let dataArr = [];
    let interval;
    for (let i = 0; i < Object.values(chartData).length; i += 1) {
      dataArr.push(Object.values(chartData)[i]);
    }
    this.setState({chartData: dataArr, referenceValue: dataArr[0].value});
  }

  receiveRangeData(key) {
    // const {data} = this.state;
    const tickerArr = this.props.holdings.map((holding) => holding.ticker);
    let apiCall;

    if (key === "1d") {
      this.receiveIntraday();
      return;
    }

    switch (key) {
      case "1w":
        apiCall = fetchWeekQuotes;
        break;
      case "1m":
        apiCall = fetchMonthQuotes;
        break;
      case "3m":
        apiCall = fetchThreeMonthsQuotes;
        break;
      case "1y":
        apiCall = fetchOneYearQuotes;
        break;
      case "all":
        apiCall = fetchMaxQuotes;
        break;
      default:
        break;
    }

    apiCall(tickerArr).then((responseJSON) => {
      console.log(responseJSON);
      this.formatChartData(responseJSON, key);
    });
  }

  changeRange(key) {
    this.setState({ range: key }, () => this.receiveRangeData(key));
  }

  renderChartRange() {
    return ["1d", "1w", "1m", "3m", "1y", "all"].map((ele, i) => {
      const className =
        ele === this.state.range
          ? "btn chart-range-button active"
          : "btn chart-range-button";
      return (
        <button
          key={i}
          className={className}
          onClick={() => this.changeRange(ele)}
        >
          <div>{ele.toUpperCase()}</div>
        </button>
      );
    });
  }

  render() {
    if (this.state.loading) return <LoadingPage />;
    const {
      portfolioValue,
      change,
      percentChange,
      data,
      chartData,
      referenceValue,
    } = this.state;
    const { user, updateUser } = this.props;

    return (
      <>
        <div className="portfolio-main">
          <div className="portfolio-value-container">
            <header className="portfolio-value">
              <div className="portfolio-number">
                <h1 id="_sum">
                  <span ref={this.ref.sumRef}>{formatNumber(portfolioValue)}</span>
                  <span ref={this.ref.sumHoverRef}></span>
                </h1>
              </div>
              <div className="portfolio-change-container">
                <div className="portfolio-change">
                  <span id="_change" ref={this.ref.changeRef}>
                    {change >= 0
                      ? `+${formatNumber(change)}`
                      : `-${formatNumber(change)}`}
                  </span>
                  <span ref={this.ref.changeHoverRef}></span>
                </div>
                <div className="portfolio-percent-change">
                  <span id="_percentChange" ref={this.ref.percentRef}>
                    {percentChange >= 0
                      ? `(+${formatPercent(percentChange)})`
                      : `(-${formatPercent(percentChange)})`}
                  </span>
                  <span ref={this.ref.percentHoverRef}></span>
                </div>
              </div>
            </header>
            <div className="dashboard-chart-container">
              <DashboardChart
                data={chartData}
                change={change}
                referenceValue={referenceValue}
                componentRef={this.ref}
              />
            </div>
            {!data && (
              <div className="initial-chart">
                <div></div>
              </div>
            )}
          </div>
          <nav className="chart-range-container">
            <div className="chart-range">{this.renderChartRange()}</div>
          </nav>
          <BuyingPowerButton user={user} updateUser={updateUser} />
        </div>
        <div className="dashboard-sidebar">
          <div>
            <DashboardSidebar holdings={this.props.holdings} apiData={data}/>
          </div>
        </div>
      </>
    );
  }
}

export default PortfolioMain;