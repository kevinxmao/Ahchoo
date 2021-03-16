import React from 'react';
import { NavLink } from 'react-router-dom';
class SplashNav extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
          <nav className="splash-nav">
            <div className="splash-nav-left">
                <img className="splash-nav-logo" src={window.textLogo} alt="logo" />
                <div className="splash-nav-list-container">
                    <ul className="splash-nav-list">
                        <li>Products</li>
                        <li>Learn</li>
                        <li>Support</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>

            <div className="splash-nav-spacer"></div>
            <div className="splash-nav-session">
              <NavLink
                to="/login"
                className="button-login"
                activeClassName="selected"
              >
                <span>Log In</span>
              </NavLink>
              <div className="session-button-spacer"></div>
              <NavLink
                to="/signup"
                className="button-signup"
                activeClassName="selected"
              >
                <span>Sign Up</span>
              </NavLink>
            </div>
          </nav>
        );
    }
}

export default SplashNav;