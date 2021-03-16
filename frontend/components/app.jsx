import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./forms/login_form_container";
import SignupForm from "./forms/signup_form_container";

const App = () => (
    <div>
        <header>
            <h1>Ahchoo is Live!</h1>
        </header>
        <Switch>
            <Route path='/login' component={LoginForm} />
            <Route path='/signup' component={SignupForm} />
        </Switch>

    </div>
)

export default App;