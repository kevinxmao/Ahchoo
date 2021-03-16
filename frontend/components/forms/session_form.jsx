import React from "react";

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
        this.props.login(this.state);
    }

    render() {
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
            </div>
        );
    }
}

export default SessionForm;