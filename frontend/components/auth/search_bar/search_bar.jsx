import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/pro-regular-svg-icons";
import { fetchAllCompanies } from "../../../util/companies/data_api_util";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      tickers: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  loadData() {
      let tickers;
      fetchAllCompanies().then(
            res => {
                tickers = Object.values(res).map((ticker) => [ticker.ticker, ticker.company]);
                this.setState({tickers: tickers});
            }
        );
    // let res = await fetchAllCompanies();
    // const tickers = Object.values(res).map((ticker) => [ticker.ticker, ticker.company]);
    // this.setState({tickers: tickers});
    // console.log('loaded');
  }

  handleChange(e) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
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
          onFocus={this.loadData}
        />
      </div>
    );
  }
}

export default SearchBar;
