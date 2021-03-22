import React from 'react';
import { formatNumber } from '../../../util/util_functions';
import DashboardSidebar from './dashboard_sidebar';

class PortfolioMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioValue: 1002332.78
        }
    }

    componentDidMount() {
        this.props.fetchUser(this.props.user.id);
    }

    calculatePortfolioValue() {
      let holdings = Object.values(this.props.holdings);
      holdings.forEach()
    }

    calculateChange() {

    }

    calculatePercentChange() {

    }

    render() {
        return (
          <>
            <div className="portfolio-main">
              <div className="portfolio-value-container">
                <header className="portfolio-value">
                  <div className="portfolio-number">
                    <h1>{formatNumber(this.state.portfolioValue)}</h1>
                  </div>
                  <div className="portfolio-change-container">
                    <div className="portfolio-change">
                        <span>+{formatNumber(230.34)}</span>
                    </div>
                    <div className="portfolio-percent-change">
                        <span>+{'2.34%'}</span>
                    </div>
                  </div>
                </header>
              </div>
              <div className="portfolio-chart-container"></div>
              <div className="buying-power-container"></div>
            </div>
            <div className="dashboard-sidebar">
              <DashboardSidebar holdings={this.props.holdings}/>
            </div>
          </>
        );
    }
}

export default PortfolioMain;