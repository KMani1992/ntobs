import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActionCreators from '../../actionCreators/Home';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        
        return (
            <main>
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <br /><br />
                        <h1 className="header center orange-text">Swift Billing System</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">A SaaS based nontaged item billing system</h5>
                        </div>
                        <div className="row center">
                            <Link id="download-button" 
                            className="btn-large waves-effect waves-light orange" 
                            to="/company">Create Company</Link>
                        </div>
                        <br /><br />
                    </div>
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        company: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        homeaction:bindActionCreators(homeActionCreators, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);