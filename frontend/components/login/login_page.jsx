import React from 'react';
import LoginFormContainer from "../forms/login_form_container";
import { DemoLogin } from '../../util/auth/demo_user';

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
                <DemoLogin />
              </div>
            </div>
          </div>
        );
    }
}

export default LoginPage;