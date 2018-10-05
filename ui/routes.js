import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/';
import Footer from './components/footer/';
import Home from './components/home/Home';

const PageRouter = ({ history }) => {
    <div>
        <Router store={store}>
            <Header />
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
            <Footer />
        </Router>
    </div>
}

export default PageRouter;