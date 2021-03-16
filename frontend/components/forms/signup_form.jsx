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
        if (window.currentUser) this.props.history.push("/");
        
        return (
            <div id="signup-form">
                <p>Make it rain</p>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleChange("firstName")}
                    />
                    <br/>
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleChange("lastName")}
                    />
                    <br/>
                    <input
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange("email")}
                    />
                    <br/>
                    <input
                        type="password"
                        placeholder="Password (min. 8 characters)"
                        value={this.state.password}
                        onChange={this.handleChange("password")}
                    />
                    <br/>
                    <button type="submit">Sign Up</button>
                </form>
                <FormError errors={this.props.errors}/>
            </div>
        );
    }
}

export default SignupForm;
