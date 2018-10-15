import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import './components/home/Home.css'
import CompanyContainer from './containers/Company';
import LoginContainer from './containers/Login'
import DashboardContainer from './containers/Dashboard'


const PageRouter = ({ history }) => (
    <div>
        <Router history={history}>
            <React.Fragment>
                <Header />                
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/company" component={CompanyContainer} />
                        <Route exact path="/login" component={LoginContainer} />
                        <Route exact path="/dashboard" component={DashboardContainer} />
                    </Switch>                
                <Footer />
            </React.Fragment>
        </Router>
    </div>
)

export default PageRouter;