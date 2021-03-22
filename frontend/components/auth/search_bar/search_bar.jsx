import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/pro-regular-svg-icons";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      tickers: [],
    };
    this.handleChange= this.handleChange.bind(this);
  }

  handleChange(e) {
      const { name, value } = event.target;
      this.setState({
          [name]: value
      })
  }

  render() {
    const { searchTerm, tickers } = this.state;
    return (
      <div className="search-area">
        <div className="search-icon-container">
          <span className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
        <input
          type="text"
          placeholder="Search"
          name="searchTerm"
          value={searchTerm}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchBar;
