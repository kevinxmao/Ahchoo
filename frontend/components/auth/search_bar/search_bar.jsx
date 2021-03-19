import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleFocus(e) {

    }

    render() {
        return (
            <div className="search-area">
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