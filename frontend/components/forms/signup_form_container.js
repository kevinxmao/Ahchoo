import React from "react";
import { signup, clearErrors } from "../../actions/session_actions";
import { connect } from "react-redux";
import SignupForm from "./signup_form";

const mapStateToProps = state => ({
    errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);