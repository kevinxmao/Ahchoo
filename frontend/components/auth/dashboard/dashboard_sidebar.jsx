import React from 'react';
import PortfolioList from './portfolio_list';

class DashboardSidebar extends React.Component {
    render() {
        return (
            <div>
                <PortfolioList holdings={this.props.holdings}/>
            </div>
        );
    }
}

export default DashboardSidebar;