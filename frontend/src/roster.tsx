import * as React from "react";
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import SignInPage from "./pages/signin";
import HomePage from "./pages/home";
const PrivateRoute = ({ component, isAuthenticated, ...rest }: any) => {
    const routeComponent = (props: any) => (
        isAuthenticated
            ? React.createElement(component, props)
            : <Redirect to={{ pathname: '/login' }} />
    );
    return <Route {...rest} render={routeComponent} />;
};

const Roster = () => {
    const isAuthenticated = localStorage.getItem('oauth') ? true : false;
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={SignInPage} />
                <PrivateRoute isAuthenticated={isAuthenticated} path="/" exact component={HomePage} />
            </Switch>
        </BrowserRouter>
    );
}
export default Roster; 