import React, { Component } from "react";
import { useRouteMatch } from "react-router-dom";
import { Switch, Route, Link } from 'react-router-dom';

import Contact from "./Contact";

export default function Posts() {
    let match = useRouteMatch();

    return (
        <div id="posts">
            <Link to={`${match.url}/President`}>President</Link>
            <Link to={`${match.url}/CEO`}>CEO</Link>
            <Link to={`${match.url}/Founder`}>Founder</Link>

            <Switch>
                <Route path={`${match.path}/:postId`}>
                    <Contact />
                </Route>
            </Switch>

        </div>
    )

}