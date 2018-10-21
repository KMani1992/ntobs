import React, { Component } from "react";
import SalesReport from "../components/salesReport/SalesReport";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as salesReportActionCreator from "../actionCreators/SalesReport";

class SalesReportContainer extends Component {
  submit = values => {
    if (values.mode === "create") {
      this.props.salesReportAction.createSalesReport(values);
    } else if (values.mode === "edit") {
      this.props.salesReportAction.editSalesReport(values);
    }
  };

  render() {
    return <SalesReport handleSubmit={this.submit} salesReportList={this.props.salesReportList} />;
  }
}

const mapStateToProps = state => ({
  salesReportList: state.salesReport.salesReportList
});

const maDispatchToProps = dispatch => ({
  salesReportAction: bindActionCreators(salesReportActionCreator, dispatch)
});

export default connect(mapStateToProps, maDispatchToProps)(SalesReportContainer);
