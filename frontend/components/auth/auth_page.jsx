import React from 'react';
import NavbarContainer from './navbar/auth_nav_container';
import PortfolioMainContainer from './dashboard/portfolio_main_container';

class AuthPage extends React.Component {
    render() {
        return (
            <div id="_auth">
                <div className="auth-nav-container">
                    <NavbarContainer />
                </div>
                <div className="auth-main">
                    <div className="auth-main-content">
                        <div className="portfolio-container">
                            <PortfolioMainContainer />
                        </div>
                        <div className="auth-main-sidebar"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthPage;