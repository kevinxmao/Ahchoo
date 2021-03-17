import React from "react";
import FormError from "../errors/form_error";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
    }

    render() {

        return (
            <div id="signup-form">
                <form onSubmit={this.handleSubmit}>
                    <header className="signup-form-header">
                        <div className="signup-welcome-message">Make it rain</div>
                        <div className="signup-welcome-subtitle">Ahchoo lets you invest in companies you love, commission-free.</div>
                    </header>

                    <div className="signup-main">
                        <div className="signup-form-1">
                            <input
                                type="text"
                                placeholder="First name"
                                value={this.state.firstName}
                                onChange={this.handleChange("firstName")}
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                value={this.state.lastName}
                                onChange={this.handleChange("lastName")}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange("email")}
                        />
                        <input
                            type="password"
                            placeholder="Password (min. 8 characters)"
                            value={this.state.password}
                            onChange={this.handleChange("password")}
                        />
                    </div>

                    <footer className="signup-footer">
                        <div className="signup-button-container">
                            <button type="submit">
                                <span>Sign Up</span>
                            </button>
                        </div>
                    </footer>
                </form>
                <FormError errors={this.props.errors}/>
            </div>
        );
    }
}

export default SignupForm;
