import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enlarged: false
        }
        this.toggleEnlarge = this.toggleEnlarge.bind(this);
    }

    handleFocus(e) {

    }

    toggleEnlarge() {
        this.setState(prevState => ({ enlarged: !prevState.enlarged }));
    }

    render() {
        const enlarged = this.state.enlarged ? "search-area enlarged" : "search-area";
        return (
            <div className={enlarged} onMouseEnter={this.toggleEnlarge} onMouseLeave={this.toggleEnlarge}>
                <div className="search-icon-container">
                    <span className="search-icon">
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                </div>
                <input type="text" placeholder="Search"/>
            </div>
        );
    }
}

export default SearchBar;