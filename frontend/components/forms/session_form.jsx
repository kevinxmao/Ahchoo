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

    render() {
        if (window.currentUser) this.props.history.push("/");
        
        return (
            <div id="login-form">
                <p>Welcome back</p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="login-email">Email or username</label>
                    <input
                        id="login-email"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange("email")}
                    />
                    <label htmlFor="login-password">Password</label>
                    <input
                        id="login-password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange("password")}
                    />
                    <button type="submit">Sign In</button>
                </form>
                <FormError errors={this.props.errors} />
            </div>
        );
    }
}

export default SessionForm;