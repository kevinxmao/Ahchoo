import React from 'react';
import LoginFormContainer from "../forms/login_form_container";

class LoginPage extends React.Component {
    render() {
        return (
          <div id="login-page">
            <img
              className="signin-image"
              src={window.signinImage}
              alt="Photo by Alec Favale on Unsplash"
            />

            <div className="signin-form-container">
              <div>
                <LoginFormContainer />
              </div>
            </div>
          </div>
        );
    }
}

export default LoginPage;