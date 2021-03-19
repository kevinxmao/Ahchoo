import React from 'react';
import NavbarContainer from './navbar/auth_nav_container';

class AuthPage extends React.Component {
    render() {
        return (
            <div id="_auth">
                <div className="auth-nav-container">
                    <NavbarContainer />
                </div>
            </div>
        )
    }
}

export default AuthPage;