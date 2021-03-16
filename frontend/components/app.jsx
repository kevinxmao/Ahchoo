import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./forms/login_form_container";
import SignupFormContainer from "./forms/signup_form_container";
import AuthNavContainer from "./auth/auth_nav_container";
import Splash from "./splash/splash";
import { AuthRoute, ProtectedRoute } from "../util/auth/routes_util";

const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Splash} />
            <AuthRoute path='/login' component={LoginFormContainer} />
            <AuthRoute path='/signup' component={SignupFormContainer} />
        </Switch>
        <ProtectedRoute path="/auth" component={AuthNavContainer} />

    </div>
)

export default App;