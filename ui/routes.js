import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import './components/home/Home.css'

const PageRouter = ({ history }) => (
    <div>
        <Router history={history}>
            <React.Fragment>
                <Header />                
                    <Switch>
                        <Route path="/" component={Home} />
                    </Switch>                
                <Footer />
            </React.Fragment>
        </Router>
    </div>
)


export default PageRouter;