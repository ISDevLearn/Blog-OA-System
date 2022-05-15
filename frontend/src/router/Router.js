import React from 'react';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
// import PrivateRoute from './PrivateRoute'
import LoginRoute from  './LoginRoute'
// import HomeView from "./view/HomeView";
// import HomeLayout from "./view/HomeLayout"
import RegView from '../view/RegView'
import LoginView from '../view/LoginView'
import NotFound from "../view/PageNotFound";
import {history} from "../utils/history";
// import BookView from "./view/BookView";


class BasicRoute extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route exact path="/login" component={LoginView} />
                    <Route exact path="/register" component={RegView} />
                    {/*<PrivateRoute path="/" component={HomeLayout} />*/}
                    <Redirect from="/" to="/login" exact/>
                    <Route component={NotFound} />
                </Switch>

            </Router>
        )
    }
}

export default BasicRoute;