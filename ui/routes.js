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
import SignupContainer from './containers/Signup'
import * as util from './util/util'
import {Redirect} from 'react-router-dom';



const unAuthPageList=[util.HOME,util.LOGIN,util.SIGNUP,util.COMPANY];
const authPageList=[util.DASHBOARD,util.OPERATOR,util.PCONTROL,
util.PRODUCT,util.SALES,util.SALES_RPT]

const PrivateRoute=({component:Component,...rest})=>{


    if(authPageList.indexOf(rest.path)!=-1 && util.getDomain()){        
            return <Route {...rest} render={(props)=><Component {...props}/>}/>                
    }
    else if(unAuthPageList.indexOf(rest.path)!=-1){
        if(util.getDomain()){
            util.clearLogin();
            return <Route {...rest} render={(props)=><Redirect to="/login"/>}/>
        }else{
            return <Route {...rest} render={(props)=><Component {...props}/>}/>                
        }
    }
    else{
        return <Route {...rest} render={(props)=><Redirect to="/login"/>}/>
    }
}


const PageRouter = ({ history }) => (
    <div>
        <Router history={history}>
            <React.Fragment>
                <Header />                
                    <Switch>
                        <PrivateRoute exact path="/" component={Home} />
                        <PrivateRoute exact path="/company" component={CompanyContainer} />
                        <PrivateRoute exact path="/login" component={LoginContainer} />
                        <PrivateRoute exact path="/dashboard" component={DashboardContainer} />
                        <PrivateRoute exact path="/operator" component={OperatorContainer} />
                        <PrivateRoute exact path="/pcontrol" component={PControlContainer} />
                        <PrivateRoute exact path="/product" component={ProductContainer} />
                        <PrivateRoute exact path="/sales" component={SalesContainer} />
                        <PrivateRoute exact path="/sales-report" component={SalesReportContainer} />
                        <PrivateRoute exact path="/signup" component={SignupContainer} />
                    </Switch>                
                <Footer />
            </React.Fragment>
        </Router>
    </div>
)

export default PageRouter;