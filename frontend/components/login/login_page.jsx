import React from 'react';
import LoginFormContainer from "../forms/login_form_container";

class LoginPage extends React.Component {
    render() {
        return (
          <div id="login-page">
            <img
              className="signin-image"
              src="https://cdn.robinhood.com/assets/generated_assets/1e23d6b90f0d905b425ea289de345ab1.jpg"
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