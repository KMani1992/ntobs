import React, { Component } from "react";
import Sales from "../components/sales/Sales";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as salesActionCreator from "../actionCreators/Sales";

class SalesContainer extends Component {
  submit = values => {
    if (values.mode === "create") {
      this.props.salesAction.createSales(values);
    } else if (values.mode === "edit") {
      this.props.salesAction.editSales(values);
    }
  };

  render() {
    return <Sales handleSubmit={this.submit} salesList={this.props.salesList} />;
  }
}

const mapStateToProps = state => ({
  salesList: state.sales.salesList
});

const maDispatchToProps = dispatch => ({
  salesAction: bindActionCreators(salesActionCreator, dispatch)
});

export default connect(mapStateToProps, maDispatchToProps)(SalesContainer);
