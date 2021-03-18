import React from 'react';
import SignupFormContainer from "../forms/signup_form_container";
import { Link } from 'react-router-dom';

class SignupPage extends React.Component {

    render() {
        return (
            <div id="signup-page">
                <div className="signup-left">
                    <div className="signup-left-content">
                        <div className="signup-logo">
                            <Link to="/">
                                <img className="splash-nav-logo" src={window.textLogo} alt="logo" />
                            </Link>
                        </div>

                        <SignupFormContainer />
                        <div className="signup-disclaimer-container">
                        </div>
                    </div>
                </div>
                <div className="signup-right">
                    <div className="signup"></div>
                </div>
            </div>
        )
    }
}

export default SignupPage;