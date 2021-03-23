import React from 'react';
import PortfolioList from './portfolio_list';

class DashboardSidebar extends React.Component {
    render() {
        console.log(this.props.apiData)
        return (
            <div>
                <PortfolioList holdings={this.props.holdings} apiData={this.props.apiData}/>
            </div>
        );
    }
}

export default DashboardSidebar;