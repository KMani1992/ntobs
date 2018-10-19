import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import './components/home/Home.css'
import CompanyContainer from './containers/Company';
import LoginContainer from './containers/Login'
import DashboardContainer from './containers/Dashboard'

import OperatorContainer from './containers/Operator'
import PControlContainer from './containers/PControl'
import ProductContainer from './containers/Product'
import SalesContainer from './containers/Sales'
import SalesReportContainer from './containers/SalesReport'



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
                        <Route exact path="/operator" component={OperatorContainer} />
                        <Route exact path="/pcontrol" component={PControlContainer} />
                        <Route exact path="/product" component={ProductContainer} />
                        <Route exact path="/sales" component={SalesContainer} />
                        <Route exact path="/sales-report" component={SalesReportContainer} />
                    </Switch>                
                <Footer />
            </React.Fragment>
        </Router>
    </div>
)

export default PageRouter;