import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/pro-regular-svg-icons";
import { searchTicker } from "../../../util/companies/data_api_util";
import SearchResultsList from "./search_result_index";
import { debounce } from "../../../util/util_functions";

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
    this.search = debounce(this.search.bind(this), 150);
    this.search = this.search.bind(this);
  }

  formatResults(res) {
    return res.filter(result => result.securityType === 'CS' || (result.exchange === 'NYS' || result.exchange === 'NAS'));
  }

  componentWillUnmount() {
    this.setState({searchTerm: ""});
    window.removeEventListener("click", this.globalClickListener);
  }

  globalClickListener(nativeEvent) {
    this.setState({ dropdownVisible: false }, () => {
      window.removeEventListener("click", this.globalClickListener);
    });
  }

  expandDropdown(syntheticEvent) {
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

  search() {
    if (this.state.searchTerm !== "") {
      searchTicker(this.state.searchTerm).then(responseJSON => {
        this.setState({ tickers: this.formatResults(responseJSON) })
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({searchTerm: ""})
    }
  }

  componentWillUnmount() {
    this.setState({dropdownVisible: false})
  }

  handleChange(e) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, this.search);
  }

  render() {
    const { searchTerm, tickers } = this.state;
    return (
      <>
        <div className="auth-nav-search-content">
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
              onBlur={() => this.setState({searchTerm: ""})}
              autoComplete="off"
            />
          </div>
        {(this.state.dropdownVisible && this.state.tickers.length > 0) && <SearchResultsList results={this.state.tickers} searchTerm={this.state.searchTerm}/>}
        </div>
      </>
    );
  }
}

export default SearchBar;
