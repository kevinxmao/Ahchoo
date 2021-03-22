import React from 'react';
import PortfolioListItem from './portfolio_list_item';

class PortfolioList extends React.Component {

    render() {
        const list = this.props.holdings.map(
            holding => <PortfolioListItem holding={holding} key={holding.id}/>
        )

        return (
          <div className="holdings-list">
            <div className="sidebar-title">
                <header>
                    <span>Stocks</span>
                </header>
                <div className="list-items">
                    {list}
                </div>
            </div>
          </div>
        );
    }
}

export default PortfolioList;