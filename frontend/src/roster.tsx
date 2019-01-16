import * as React from "react";
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import history from "./services/history";
import CoursesPage from "./pages/courses";
import CategoriesPage from "./pages/categories";
import VerticalsPage from "./pages/verticals";
import SignInPage from "./pages/signin";
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
        <Router history={history}>
            <Switch>
                <Route path="/login" exact component={SignInPage} />
                <PrivateRoute isAuthenticated={isAuthenticated} path="/" exact component={CoursesPage} />
                <PrivateRoute isAuthenticated={isAuthenticated} path="/courses" exact component={CoursesPage} />
                <PrivateRoute isAuthenticated={isAuthenticated} path="/categories" exact component={CategoriesPage} />
                <PrivateRoute isAuthenticated={isAuthenticated} path="/verticals" exact component={VerticalsPage} />
            </Switch>
        </Router>
    );
}
export default Roster; 