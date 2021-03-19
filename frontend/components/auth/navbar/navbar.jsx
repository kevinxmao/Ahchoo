import React from 'react';
import { Link } from 'react-router-dom';

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
                <div className="auth-nav-search">

                </div>
                <div className="auth-nav-spacer">
                    <button onClick={this.props.logout}>Log Out</button>
                </div>
                <div className="auth-nav-index"></div>
            </div>
        )
    }
}

export default Navbar;