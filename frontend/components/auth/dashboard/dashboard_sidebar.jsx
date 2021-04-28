import React from 'react';
import PortfolioList from './holdings_index/portfolio_list';
import WatchlistIndex from './watchlist_index/watchlist_index';

class DashboardSidebar extends React.Component {
    render() {
        return (
            <div className="sidebar-content">
                <PortfolioList holdings={this.props.holdings} apiData={this.props.apiData}/>
                <WatchlistIndex />
            </div>
        );
    }
}

export default DashboardSidebar;