import React, { Component } from "react";
import SignupInit from "../components/signup/Signup";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as operatorActionCreator from "../actionCreators/Operator";
import * as util from "../util/util";

class SignupContainer extends Component {
  constructor(props) {
    super(props);
  }


  submit = values => {
    console.log("operator", values);
    let operator = {};

    if (values) {
      operator = {
        name: values.userName,
        loginId: values.login,
        status: "inactive",
        password: values.password,
        domain: values.domain,
        type: "user",
        authType: "local"
      };
    }

    console.log("oper container",operator);
    this.props.operatorAction.signupOperator(operator);
  };

  render() {
    return (
      <SignupInit onSubmit={this.submit} />
    );
  }
}

const mapStateToProps = state => ({
  operator: state.operator.default
});

const maDispatchToProps = dispatch => ({
  operatorAction: bindActionCreators(operatorActionCreator, dispatch)
});

export default connect(mapStateToProps, maDispatchToProps)(SignupContainer);
