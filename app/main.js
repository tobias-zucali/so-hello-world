import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, hashHistory } from 'react-router'
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import hashHistory from 'react-router/lib/hashHistory';
import App from './App';
//import One from './One';
//import Two from './Two';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/one" getComponent={ loadComponentOne }/>
            <Route path="/two" getComponent={ loadComponentTwo }/>
            <Route path="/one/:foo" getComponent={ loadComponentOne }/>
            <Route path="/two/:foo" getComponent={ loadComponentTwo }/>
        </Route>
    </Router>,
    document.getElementById("app")
);

function loadComponentOne(location, cb) {
    require.ensure(
        ['./One'],
        (require) => {
            const One = require('./One');
            cb(null, One.default);
        },
        'One'
    );
}

function loadComponentTwo(location, cb) {
    require.ensure(
        ['./Two'],
        (require) => {
            const Two = require('./Two');
            cb(null, Two.default);
        },
        'Two'
    );
}



//getComponent=
// require.ensure(dependencies, callback)
