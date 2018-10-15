import React, { Component } from "react";
import Login from "../components/login/Login";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginActionCreators from "../actionCreators/Login";
import { Redirect } from "react-router-dom";

class LoginContainer extends Component {
  submit = values => {
    console.log("login", values);
    this.props.login.doLogin(values);
  };

  render() {
    const { common } = this.props;

    if (common.done) {        
      return <Redirect to="/dashboard" />;
    }

    return <Login onSubmit={this.submit} />;
  }
}

const mapStateToProps = state => ({
  login: state.login,
  common: state.common
});

const mapActionToProps = dispatch => ({
  login: bindActionCreators(loginActionCreators, dispatch)
});

export default connect(mapStateToProps, mapActionToProps)(LoginContainer);
