import React from 'react';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
// import PrivateRoute from './PrivateRoute'
// import HomeView from "./view/HomeView";
// import HomeLayout from "./view/HomeLayout"
import RegView from '../view/RegView'
import LoginView from '../view/LoginView'
import NotFound from "../view/PageNotFound";
import {history} from "../utils/history";
import HomeLayout from "../view/HomeLayout";


class BasicRoute extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route exact path="/login" component={LoginView} />
                    <Route exact path="/register" component={RegView} />
                    <Route path="/:loginUsername" component={HomeLayout}/>
                    <Redirect from="/" to="/login" exact/>
                    <Route component={NotFound} />
                </Switch>

            </Router>
        )
    }
}

export default BasicRoute;