import React from 'react';
import { Link } from 'react-router-dom';


class SearchResultItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { symbol, securityName } = this.props;
        return (
            <div className="search-result-item" >
                <Link to={`/auth/tickers/${symbol}`}>
                    <div><span>{symbol}</span></div>
                    <div>{securityName}</div>
                </Link>
            </div>
        )
    }
}

export default SearchResultItem;