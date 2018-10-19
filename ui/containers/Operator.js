import React, { Component } from "react";
import Operator from "../components/operator/Operator";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as operatorActionCreator from "../actionCreators/Operator";

class OperatorContainer extends Component {
  submit = values => {
    if (values.mode === "create") {
      this.props.operatorAction.createOperator(values);
    } else if (values.mode === "edit") {
      this.props.operatorAction.editOperator(values);
    }
  };

  render() {
    return <Operator handleSubmit={this.submit} />;
  }
}

const mapStateToProps = state => ({
  operatorList: state.operatorList
});

const maDispatchToProps = dispatch => ({
  operatorAction: bindActionCreators(operatorActionCreator, dispatch)
});

export default connect(mapStateToProps, maDispatchToProps)(OperatorContainer);
