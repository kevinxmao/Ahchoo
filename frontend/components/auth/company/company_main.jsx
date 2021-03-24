import React from "react";
import { fetchSingleQuote } from "../../../util/companies/data_api_util";
import { formatCompanyName } from "../../../util/util_functions";

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
    };
    this.formatCompanyInfo = this.formatCompanyInfo.bind(this);
    this.formatIntradayData = this.formatIntradayData.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
    this.calculatePercentChange = this.calculatePercentChange.bind(this);
  }

  componentDidMount() {
    const ticker = this.props.ticker;
    fetchSingleQuote(ticker).then((responseJSON) =>
      this.setState({ data: responseJSON }, this.formatCompanyInfo)
    );
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
    for (let i = 0; i < Object.values(chartData).length; i += 10) {
      dataArr.push(Object.values(chartData)[i]);
    }

    this.setState({ chartData: dataArr}, this.calculateChange);
  }

  calculateChange() {
    let openPrice =
        this.state.data["intraday-prices"][0].average ||
        this.state.data["intraday-prices"][4].open;
    this.setState({change: (this.state.price - openPrice), referenceValue: openPrice}, () => this.calculatePercentChange(openPrice))
  }

  calculatePercentChange(openValue) {
      const { change } = this.state;
      const percentage = change / openValue;
      this.setState({ percentChange: percentage, loading: false });
  }

  render() {
    if (this.state.loading) return null;
    const {price, companyInfo, change, percentChange, chartData, referenceValue} = this.state;
    return (
        <>
            <div className="company-main">
                <div className="company-price-container">
                    <header className="company-price">
                        <div className="company-name">
                            <h1>{formatCompanyName(companyInfo.companyName)}</h1>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
  }
}

export default CompanyMain;
