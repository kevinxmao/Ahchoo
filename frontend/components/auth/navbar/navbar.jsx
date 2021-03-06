import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from '../search_bar/search_bar_container';
import NavLinks from '../../links/nav_links';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enlarged: false
        }
    }

    toggleEnlarge() {
        this.setState(prevState => ({ enlarged: !prevState.enlarged }));
    }

    render() {
        return (
          <div className="auth-nav-container">
            <div className="auth-nav">
              <a className="auth-logo-link" href="/">
                <img
                  className="auth-nav-logo"
                  src={window.blackArrow}
                  onMouseOver={(e) =>
                    (e.currentTarget.src = `${this.props.theme === 'green' ? window.greenArrow : window.redArrow}`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.src = `${window.blackArrow}`)
                  }
                  alt="arrow logo"
                />
              </a>
              <div className="auth-nav-search-container">
                  <SearchBarContainer />
              </div>
              <div className="auth-nav-spacer"></div>
              <div className="auth-nav-index">
                <NavLinks user={this.props.user} logout={this.props.logout} portfolioValue={this.props.portfolioValue}/>
              </div>
            </div>
          </div>
        );
    }
}

export default Navbar;