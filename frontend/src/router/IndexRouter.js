import React, {Component} from 'react';
import {Router} from "react-router-dom";
import {Route} from "react-router";

import ArticleList from "../components/ArticleList";
import {history} from "../utils/history";


class IndexRouter extends React.Component {

    render() {
        const username = this.props.match.params.loginUsername
        return (
            <div>
                <Router history={history}>
                    <switch>
                        <Route path={"/"+username+"/home"} component={ArticleList} exact/>
                    </switch>
                </Router>
            </div>
        );
    }
}

export default IndexRouter;