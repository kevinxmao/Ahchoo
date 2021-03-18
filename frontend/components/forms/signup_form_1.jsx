import React from "react";
import FormError from "../errors/form_error";
import { Link } from "react-router-dom";

class SignupForm1 extends React.Component {
    render() {
        if (this.props.currentForm !== 1) {
            return null;
        }

        return (
          <>
            <header className="signup-form-header">
              <div className="signup-welcome-message">Make it rain</div>
              <div className="signup-welcome-subtitle">
                Ahchoo lets you invest in companies you love, commission-free.
              </div>
            </header>

            <div className="signup-main">
              <div className="signup-form-1">
                <input
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  value={this.props.firstName}
                  onChange={this.props.handleChange}
                />
                <div></div>
                <input
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  value={this.props.lastName}
                  onChange={this.props.handleChange}
                />
              </div>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={this.props.email}
                onChange={this.props.handleChange}
              />
              <input
                type="password"
                placeholder="Password (min. 8 characters)"
                name="password"
                value={this.props.password}
                onChange={this.props.handleChange}
              />
            </div>

            <FormError errors={this.props.errors} />

            {/* <footer className="signup-footer">
              <div className="signup-button-container">
              </div>
              <div className="signup-login-redirect">
                <div>Already a user?</div>
                <Link to="/login">
                  <span>Log in to trade now</span>
                </Link>
              </div>
            </footer> */}
          </>
        );
    }
}

export default SignupForm1;