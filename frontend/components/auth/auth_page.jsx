import React from 'react';
import Navbar from './navbar/navbar';

class AuthPage extends React.Component {
    render() {
        return (
            <div id="_auth">
                <div className="auth-nav-container">
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default AuthPage;