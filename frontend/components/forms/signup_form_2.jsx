import React from "react";
import FormError from "../errors/form_error";
import { Link } from "react-router-dom";

class SignupForm2 extends React.Component {
  render() {
    if (this.props.currentForm !== 2) {
      return null;
    }

    return (
      <>
        <header className="signup-form-header">
          <div className="signup-welcome-message">Make it rain</div>
          <div className="signup-welcome-subtitle">
            Dream big on your buying power
          </div>
        </header>

        <div className="signup-main">
          <input
            type="text"
            placeholder="Amount (dream big my friend)"
            name="funds"
            value={this.props.funds}
            onChange={this.props.handleChange}
          />
        </div>

        <FormError errors={this.props.errors} />

        {/* <footer className="signup-footer">
          <div className="signup-button-container">
            <button type="submit">
              <span>Sign Up</span>
            </button>
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

export default SignupForm2;
