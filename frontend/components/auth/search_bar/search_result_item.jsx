import React from 'react';
import { Link } from 'react-router-dom';


class SearchResultItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderResultHighlight = this.renderResultHighlight.bind(this);
  }

  renderResultHighlight(text, highlight) {
     const parts = text.split(new RegExp(`(${highlight})`, "gi"));
     return (
       <span>
         {parts.map((part, i) =>
           part.toLowerCase() === highlight.toLowerCase() ? <b key={i}>{part}</b> : part
         )}
       </span>
     );
  }

  render() {
    const { symbol, securityName, searchTerm } = this.props;
    return (
      <div className="search-result-item">
        <Link to={`/auth/tickers/${symbol}`}>
          <div>{this.renderResultHighlight(symbol, searchTerm)}</div>
          <div>{this.renderResultHighlight(securityName, searchTerm)}</div>
        </Link>
      </div>
    );
  }
}

export default SearchResultItem;