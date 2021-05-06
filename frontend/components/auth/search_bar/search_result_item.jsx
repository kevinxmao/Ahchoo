import React from 'react';
import { Link } from 'react-router-dom';


class SearchResultItem extends React.Component {
    constructor(props) {
        super(props);
        this.renderResultHighlight = this.renderResultHighlight.bind(this);
    }

    renderResultHighlight(result) {
        const substring = new RegExp(this.props.searchTerm.toUpperCase());
        // debugger
        return result.replace(substring, (match) => `<mark>${match}</mark>`);
    }

    render() {
        const { symbol, securityName } = this.props;
        return (
            <div className="search-result-item" >
                <Link to={`/auth/tickers/${symbol}`}>
                    <div><span>{this.renderResultHighlight(symbol)}</span></div>
                    <div>{securityName}</div>
                </Link>
            </div>
        )
    }
}

export default SearchResultItem;