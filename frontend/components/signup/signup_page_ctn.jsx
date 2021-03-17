import React from 'react';

class SignupPageCtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.location.state.partialForm, {
      funds: "",
    });
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.location.state.signup(this.state);
  }
}



const SignupPageCtn;