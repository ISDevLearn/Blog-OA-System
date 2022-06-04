import React, {Component} from 'react';
import {Router} from "react-router-dom";
import {Redirect, Route} from "react-router";
import {history} from "../utils/history";

import HomeContent from "../view/HomeContent";
import ArticleContent from "../view/ArticleContent";
import FollowersContent from "../view/FollowersContent";
import FollowingsContent from "../view/FollowingsContent";
import TextEditor from "../components/TextEditor";


class IndexRouter extends React.Component {
    render() {
        // const username = this.props.match.params.loginUsername
        return (
            <div>
                <Router history={history}>
                    <switch>
                        <Route path="/:loginUsername/home" component={HomeContent} exact/>
                        <Route path="/:loginUsername/followers" component={FollowersContent} exact/>
                        <Route path="/:loginUsername/followings" component={FollowingsContent} exact/>
                        <Route path="/:loginUsername/post" component={TextEditor} exact/>
                        <Route path="/:loginUsername/article/:articleId" component={ArticleContent} exact/>
                        {/*<Redirect to={"/"+ username +"/home"}/>*/}
                    </switch>
                </Router>
            </div>
        );
    }
}

export default IndexRouter;