import React from "react";
import FormError from "../errors/form_error";
import { Link } from "react-router-dom";
import SignupForm1 from "./signup_form_1";
import SignupForm2 from "./signup_form_2";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      funds: "",
      currentForm: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    console.log(name);
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { firstName, lastName, email, password, funds } = this.state;
    this.props.signup({
      firstName,
      lastName,
      email,
      password,
      funds,
    });
  }

  componentDidMount(e) {
    this.props.clearErrors();
  }

  _prev() {
    let currentForm = this.state.currentForm;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentForm = currentForm <= 1 ? 1 : currentForm - 1;
    this.setState({
      currentForm: currentForm,
    });
  }

  _next() {
    let currentForm = this.state.currentForm;
    currentForm = currentForm >= 1 ? 2 : currentForm + 1;
    this.setState({
      currentForm: currentForm,
    });
  }

  get previousButton() {
    let currentForm = this.state.currentForm;
    // If the current step is not 1, then render the "previous" button
    if (currentForm !== 1) {
      return (
        <button
            className="btn secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentForm = this.state.currentForm;
    // If the current step is not 3, then render the "next" button
    if (currentForm < 2) {
      return (
        <button className="btn secondary"  type="button" onClick={this._next}>
          Continue
        </button>
      );
    }
    return null;
  }

  get submitButton() {
      let currentForm = this.state.currentForm;
      if (currentForm === 2) {
          return (
            <button type="submit">
              <span>Sign Up</span>
            </button>
          );
      }
      return null;
  }

  render() {
    return (
      <div id="signup-form">
        <form onSubmit={this.handleSubmit}>
          <SignupForm1
            currentForm={this.state.currentForm}
            handleChange={this.handleChange}
            errors={this.props.errors}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            password={this.state.password}
          />
          <SignupForm2
            currentForm={this.state.currentForm}
            handleChange={this.handleChange}
            errors={this.props.errors}
            funds={this.state.funds}
          />

          <footer className="signup-footer">
            {this.previousButton}
            <div className="signup-button-container">{this.submitButton}</div>
            {this.nextButton}
            <div className="signup-login-redirect">
              <div>Already a user?</div>
              <Link to="/login">
                <span>Log in to trade now</span>
              </Link>
            </div>
          </footer>
        </form>
      </div>
    );
  }
}

export default SignupForm;
