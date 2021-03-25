import React from "react";
import { Route, Switch } from "react-router-dom";
// import LoginFormContainer from "./forms/login_form_container";
// import SignupFormContainer from "./forms/signup_form_container";
// import AuthNavContainer from "./auth/navbar/auth_nav_container";
import Splash from "./splash/splash";
import { AuthRoute, ProtectedRoute } from "../util/auth/routes_util";
import LoginPage from "./login/login_page";
import SignupPage from "./signup/signup_page";
import AuthPage from "./auth/auth_page";
import AuthNavContainer from "./auth/navbar/auth_nav_container"
import CompanyMainContainer from './auth/company/company_main_container';
import CompanyPage from "./auth/company/company_page";

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path='/' component={Splash} />
            <AuthRoute path='/login' component={LoginPage} />
            <AuthRoute path='/signup' component={SignupPage} />
        </Switch>
        <ProtectedRoute path="/auth" component={AuthNavContainer} />
        <ProtectedRoute path="/auth/home" component={AuthPage} />
        <div id="_company">
            <div className="auth-main">
                <div className="company-main-content">
                    <div className="company-container">
                        <ProtectedRoute path="/auth/tickers/:id" component={CompanyMainContainer} />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default App;