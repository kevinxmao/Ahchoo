import React from 'react';
import PortfolioListItem from './portfolio_list_item';

class PortfolioList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.holdings.length) return null;
        const list = this.props.holdings.map(
            holding => {
                return <PortfolioListItem holding={holding} key={holding.id} datum={this.props.apiData[holding.ticker]}/>;
            }
        )

        return (
          <div className="holdings-list">
            <div className="sidebar-title">
                <header>
                    <span>Stocks</span>
                </header>
            </div>
            <div className="list-items">
                {list}
            </div>
          </div>
        );
    }
}

export default PortfolioList;