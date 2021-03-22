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
      dropdownVisible: false,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.loadData = this.loadData.bind(this);
    this.globalClickListener = this.globalClickListener.bind(this);
    this.expandDropdown = this.expandDropdown.bind(this);
  }

  //   loadData() {
  //       let tickers;
  //       fetchAllCompanies().then(
  //             res => {
  //                 tickers = Object.values(res).map((ticker) => [ticker.ticker, ticker.company]);
  //                 this.setState({tickers: tickers});
  //             }
  //         );
  //   }

  componentWillUnmount() {
    window.removeEventListener("click", this.globalClickListener);
  }

  globalClickListener(nativeEvent) {
      console.log("global click");
    this.setState({ dropdownVisible: false }, () => {
      window.removeEventListener("click", this.globalClickListener);
    });
  }

  expandDropdown(syntheticEvent) {
    console.log("expand dropdown");
    syntheticEvent.stopPropagation();
    this.setState(
    //   (prevState) => ({ dropdownVisible: !prevState.dropdownVisible }),
        {dropdownVisible: true},
      () => {
        if (this.state.dropdownVisible) {
          window.addEventListener("click", this.globalClickListener);
        }
      }
    );
  }

  handleBodyclick(syntheticEvent) {
    syntheticEvent.stopPropagation();
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
          onClick={this.expandDropdown}
        />
      </div>
    );
  }
}

export default SearchBar;
