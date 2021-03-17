import React from 'react';
import { login } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Demo = props => (
    <button className="demo-login" onClick={() => props.login({email: "demo@app.com", password: "demouser"})}>
        <span>Demo Login</span>
    </button>
)

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user))
});

export const DemoLogin = withRouter(connect(null, mapDispatchToProps)(Demo));