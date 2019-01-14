import * as React from "react";
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
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

const Roster = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" exact component={SignInPage} />
            <PrivateRoute isAuthenticated={false} path="/courses" exact component={CoursesPage} />
            <PrivateRoute isAuthenticated={false} path="/categories" exact component={CategoriesPage} />
            <PrivateRoute isAuthenticated={false} path="/verticals" exact component={VerticalsPage} />
        </Switch>
    </BrowserRouter>
);
export default Roster; 