import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from '../search_bar/search_bar_container';
import NavLinks from '../../links/nav_links';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="auth-nav">
                <a className="auth-logo-link" href="/">
                    <img className="auth-nav-logo" 
                        src={window.blackArrow} 
                        onMouseOver={e => e.currentTarget.src = `${window.greenArrow}`}
                        onMouseLeave={e => e.currentTarget.src = `${window.blackArrow}` }
                        alt="arrow logo" />
                </a>
                <div className="auth-nav-search-container">
                    <div>
                        <div className="auth-nav-search-content">
                            <SearchBarContainer />
                        </div>
                    </div>
                </div>
                <div className="auth-nav-spacer">
                </div>
                <div className="auth-nav-index">
                    <NavLinks />
                </div>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        )
    }
}

export default Navbar;