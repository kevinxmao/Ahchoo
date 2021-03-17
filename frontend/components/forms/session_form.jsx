import React from "react";
import FormError from "../errors/form_error";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return (e) => this.setState({[field]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props
          .login(this.state)
          .then(null, () => this.setState({ email: "", password: "" }));
    }

    componentDidMount(e) {
      this.props.clearErrors();
    }

    render() {
        if (window.currentUser) this.props.history.push("/");

        return (
          <div id="login-form">
            <form onSubmit={this.handleSubmit}>
              <header className="signin-welcome-header">
                <span className="signin-welcome-message">Welcome Back</span>
              </header>

              <div className="signin-main">
                <label className="input-title" htmlFor="login-email">
                  <span className="input-field">Email or username</span>
                </label>
                <input
                  id="login-email"
                  className="input"
                  type="text"
                  value={this.state.email}
                  onChange={this.handleChange("email")}
                />
                <label className="input-title" htmlFor="login-password">
                  <span className="input-field">Password</span>
                </label>
                <input
                id="login-password"
                className="input"
                type="password"
                value={this.state.password}
                onChange={this.handleChange("password")}
                />
              </div>
            
              <FormError errors={this.props.errors} />

              <footer className="signin-footer">
                <div className="signin-button-container">
                  <button type="submit">
                    <span>Sign In</span>
                  </button>
                </div>
              </footer>
            </form>
          </div>
        );
    }
}

export default SessionForm;