import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className="auth-nav">
                <div className="auth-nav-left">
                    <Link to="/auth">
                        <img className="auth-nav-logo" 
                            src={window.blackArrow} 
                            onMouseOver={e => e.currentTarget.src = `${window.greenArrow}`}
                            onMouseLeave={e => e.currentTarget.src = `${window.blackArrow}` }
                            alt="arrow logo" />
                    </Link>
                </div>
                <div className="auth-nav-search">

                </div>
                <div className="auth-nav-spacer"></div>
                <div className="auth-nav-index"></div>
            </div>
        )
    }
}

export default Navbar;