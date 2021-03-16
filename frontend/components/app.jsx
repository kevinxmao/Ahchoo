import React from "react";
import { Route } from "react-router-dom";
import LoginForm from "./forms/login_form_container";
import SignupForm from "./forms/signup_form_container";

const App = () => (
    <div>
        <header>
            <h1>Ahchoo is Live!</h1>
        </header>
        <Route path='/login' exact component={LoginForm} />
        <Route path='/signup' exact component={SignupForm} />

    </div>
)

export default App;