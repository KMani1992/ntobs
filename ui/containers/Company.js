import React, { Component } from "react";
import { connect } from "react-redux";
import * as companyActionCreator from "../actionCreators/Company";
import { bindActionCreators } from "redux";
import Company from "../components/company/Company";
import { Redirect } from "react-router-dom";

class CompanyContainer extends Component {
  submit = values => {
    console.log(values, "comp state", companyState);
    let companyState = { company: {}, operator: {} };
    companyState.company.name = values.company;
    companyState.company.domain = values.domain;
    companyState.company.key = values.key;
    companyState.company.status = "active";
    companyState.operator.name = values.userName;
    companyState.operator.loginId = values.login;
    companyState.operator.password = values.password;
    companyState.operator.type = "admin";
    companyState.operator.authType = "local";
    companyState.operator.status = "active";
    this.props.companyAction.createCompany(companyState);
  };

  componentDidMount() {
    console.log("inside com did mount cmpny");
    this.props.companyAction.clearState();
  }

  render() {
    const { common } = this.props;

    if (common.done) {
      return <Redirect to="/login" />;
    }

    return <Company onSubmit={this.submit} />;
  }
}

const mapStateToProps = state => {
  return {
    companyState: state.company,
    common: state.common
  };
};

const mapActionToProps = dispatch => ({
  companyAction: bindActionCreators(companyActionCreator, dispatch)
});

export default connect(mapStateToProps, mapActionToProps)(CompanyContainer);
