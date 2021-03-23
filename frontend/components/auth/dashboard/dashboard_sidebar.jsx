import React from 'react';
import PortfolioList from './holdings_index/portfolio_list';

class DashboardSidebar extends React.Component {
    render() {
        return (
            <div className="sidebar-content">
                <PortfolioList holdings={this.props.holdings} apiData={this.props.apiData}/>
            </div>
        );
    }
}

export default DashboardSidebar;