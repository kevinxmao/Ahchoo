import React from 'react';
import SearchResultItem from './search_result_item';

class SearchResultsList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.results || !this.props.results.length) return null;
        const items = this.props.results.slice(0, 5).map((result, i) => {
            const { symbol, securityName } = result;
            return <SearchResultItem key={i} symbol={symbol} securityName={securityName} searchTerm={this.props.searchTerm}/>
        })
        return (
          <div className="search-dropdown">
            <div>
              <div className="search-title">
                <span>Stocks</span>
              </div>
              <div className="search-results-container">{items}</div>
            </div>
          </div>
        );
    }
}

export default SearchResultsList;