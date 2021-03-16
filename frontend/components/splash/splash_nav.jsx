import React from 'react';
import { NavLink } from 'react-router-dom';

class SplashNav extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <nav id="splash-nav">
                <div id="splash-left">
                    <div id="splah-nav-logo">
                        <p>Ahchoo</p>
                    </div>
                    <ul id="splash-nav-list">
                        <li>Products</li>
                        <li>Learn</li>
                        <li>Support</li>
                        <li>About</li>
                    </ul>
                </div>
                <div id="splash-nav-session">
                    <NavLink to="/login" className="button-login" activeClassName="selected">Log In</NavLink>
                    <NavLink to="/signup" className="button-signup" activeClassName="selected">Sign Up</NavLink>
                </div>
            </nav>
        )
    }
}

export default SplashNav;