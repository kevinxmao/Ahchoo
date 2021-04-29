import React from 'react';
import PortfolioList from './holdings_index/portfolio_list';
import WatchlistIndexContainer from './watchlist_index/watchlist_index_container';

class DashboardSidebar extends React.Component {
    render() {
        return (
            <div className="sidebar-content">
                <PortfolioList holdings={this.props.holdings} apiData={this.props.apiData}/>
                <WatchlistIndexContainer />
            </div>
        );
    }
}

export default DashboardSidebar;