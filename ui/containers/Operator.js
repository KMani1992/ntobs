import React, { Component } from "react";
import OperatorInit from "../components/operator/Operator";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as operatorActionCreator from "../actionCreators/Operator";
import * as util from "../util/util";

class OperatorContainer extends Component {
  constructor(props) {
    super(props);
  }

  editOperator = (e, value) => {
    e && e.preventDefault();
    console.log(e, value);
    let data = {
      userName: "",
      login: "",
      password: "",
      status: "active",
      domain: "",
      mode: "create"
    };

    if (value) {
      const element = document.getElementsByName(".tabs");
      let instance = M.Tabs.getInstance(element);
      //instance.select("tab1")
      data = {
        userName: value.name,
        login: value.loginId,
        password: "",
        status: value.status,
        domain: value.domain,
        mode: "edit",
        id: value._id,        
      };
    }

    console.log("updated data", data);
    this.props.operatorAction.editOperatorPopulate(data);
  };

  componentDidMount() {
    this.props.operatorAction.readOperator();
    const element = document.querySelectorAll(".tabs");
    let instance = M.Tabs.init(element);
  }

  submit = values => {
    console.log("operator", values);
    let operator = {};

    if (values) {
      operator = {
        name: values.userName,
        loginId: values.login,
        status: "active",
        domain: util.getDomain(),
        updatedBy:util.getOperatorId(),
      };
    }

    if (values.mode === "create") {
      operator.password = values.password;
      operator.type = "user";
      operator.authType = "local";
      this.props.operatorAction.createOperator(operator);
    } else if (values.mode === "edit") {
      operator.id = this.props.operator.id;
      this.props.operatorAction.editOperator(operator);
    }
  };

  render() {
    return (
      <OperatorInit
        onSubmit={this.submit}
        operatorList={this.props.operatorList}
        editOperator={this.editOperator}
      />
    );
  }
}

const mapStateToProps = state => ({
  operatorList: state.operator.operatorList ? state.operator.operatorList : [],
  operator: state.operator.default
});

const maDispatchToProps = dispatch => ({
  operatorAction: bindActionCreators(operatorActionCreator, dispatch)
});

export default connect(mapStateToProps, maDispatchToProps)(OperatorContainer);
