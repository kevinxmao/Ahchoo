import React from "react";
import ShowMoreText from "react-show-more-text";
import { fetchSingleQuote } from "../../../util/companies/data_api_util";
import { formatCompanyName, formatNumber, formatPercent, setTheme, ownShare } from "../../../util/util_functions";
import CompanyChart from "./company_chart";
import CompanySidebar from "./company_sidebar";
import LoadingPage from "../../loading_page";
import Ownership from "./ownership";

class CompanyMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      price: 0,
      change: 0,
      percentChange: 0,
      data: null,
      companyInfo: null,
      companyStats: null,
      rangeData: null,
      chartData: null,
      referenceValue: null,
      showMore: false,
      readMore: false,
      isHolding: false,
    };
    this.formatCompanyInfo = this.formatCompanyInfo.bind(this);
    this.formatIntradayData = this.formatIntradayData.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
    this.calculatePercentChange = this.calculatePercentChange.bind(this);
    this.extractHolding = this.extractHolding.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchUser(this.props.user.id)
      .then(() => {
    fetchSingleQuote(this.props.ticker).then((responseJSON) =>
      this.setState({ data: responseJSON }, this.formatCompanyInfo)
    );
      })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme) setTheme(this.props.theme);
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetchSingleQuote(this.props.ticker).then((responseJSON) =>
        this.setState({ data: responseJSON }, this.formatCompanyInfo)
      );
    }
  }

  formatCompanyInfo() {
      const {data} = this.state;
      this.setState({
          price: data.price,
          companyInfo: data.company,
          companyStats: data.stats
      }, this.formatIntradayData)
  }

  formatIntradayData() {
    const chartData = {};
    let price;
    this.state.data["intraday-prices"].forEach((intraPrice) => {
        const timeKey = intraPrice.label;
        price = intraPrice.average ? intraPrice.average : price;
        chartData[timeKey] = {timeKey, price};
    });

    let dataArr = [];
    for (let i = 0; i < Object.values(chartData).length; i += 2) {
      dataArr.push(Object.values(chartData)[i]);
    }

    this.setState({ chartData: dataArr}, this.calculateChange);
  }

  calculateChange() {
    let openPrice =
        this.state.data["intraday-prices"][0].average ||
        this.state.data["intraday-prices"][4].open;
    this.setState({change: (this.state.price - openPrice), referenceValue: openPrice}, () => {
      this.calculatePercentChange(openPrice);

      if (this.state.change < 0) {
        this.props.reddify();
      } else {
        this.props.greenify();
      }
    })
  }

  calculatePercentChange(openValue) {
      const { change } = this.state;
      const percentage = change / openValue;
      this.setState({ percentChange: percentage, loading: false });
  }

  extractHolding() {
    const index = this.props.holdings.findIndex(holding => holding.ticker === this.props.ticker);
    return this.props.holdings[index];
  }

  render() {
    if (this.state.loading) return <LoadingPage />;

    const {price, companyInfo, change, percentChange, chartData, referenceValue} = this.state;
    const {user, ticker, holdings, createHolding, deleteHolding, updateHolding, fetchUser} = this.props;
    return (
      <div id="_company">
        <div className="auth-main">
          <div className="company-main-content">
            <div className="company-container">
              <div className="company-main">
                <div className="company-price-container">
                  <div className="company-name">
                    <h1>{formatCompanyName(companyInfo.companyName)}</h1>
                  </div>
                  <header className="company-price">
                    <div className="price-value">
                      <h1>{`${formatNumber(price)}`}</h1>
                    </div>
                    <div className="price-change-container">
                      <div className="price-change">
                        <span>
                          {change >= 0
                            ? `+${formatNumber(change)}`
                            : `-${formatNumber(change)}`}
                        </span>
                      </div>
                      <div className="price-percent-change">
                        <span>
                          {percentChange >= 0
                            ? `(+${formatPercent(percentChange)})`
                            : `(-${formatPercent(percentChange)})`}
                        </span>
                      </div>
                    </div>
                  </header>
                  <div className="company-chart-container">
                    <CompanyChart
                      data={chartData}
                      change={change}
                      referenceValue={referenceValue}
                    />
                  </div>
                </div>
                <div className="chart-range-container"></div>
                {ownShare(holdings, ticker) && (
                  <Ownership
                    holding={this.extractHolding()}
                    holdings={holdings}
                    price={price}
                    change={change}
                    percentChange={percentChange}
                  />
                )}
                <section className="company-basic-info">
                  <header className="about-header">
                    <div>
                      <h2>About</h2>
                      <a>
                        <span>Show More</span>
                      </a>
                    </div>
                  </header>
                  <div className="company-description">
                    <ShowMoreText
                      line={2}
                      more="Read More"
                      less="Read Less"
                      className="description-content"
                      expanded={false}
                    >
                      {companyInfo.description}{" "}
                    </ShowMoreText>
                  </div>
                </section>
              </div>
              <div className="company-sidebar">
                <div>
                  <CompanySidebar
                    ticker={ticker}
                    user={user}
                    holdings={holdings}
                    price={price}
                    createHolding={createHolding}
                    updateHolding={updateHolding}
                    deleteHolding={deleteHolding}
                    fetchUser={fetchUser}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// class Ownership extends React.Componet {

// }

export default CompanyMain;
