import React, { Component } from "react";
import SalesReport from "../components/salesReport/SalesReport";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as salesReportActionCreator from "../actionCreators/SalesReport";
import * as pcontrolActionCreator from "../actionCreators/PControl";
import * as productActionCreator from "../actionCreators/Product";
import * as util from "../util/util";

class SalesReportContainer extends Component {
  componentDidMount() {
    this.props.productAction.readProduct();
    this.props.pcontrolAction.readPControlVal({
      pid: "init",
      key: "METAL,CATEGORY"
    });
  }

  submit = values => {
    console.log("sales report input", values);
    let query = `?fromDt=${values.fromDate}&toDt=${values.toDate}&metal=${values.metal}&category=${values.category}&product=${values.product}&billNo=${values.billNo}`;
    this.props.salesReportAction.readSalesReport(query);
  };

  render() {
    const { salesReport } = this.props;
    return (
      <SalesReport
        onSubmit={this.submit}
        rptData={{
          salesReport: salesReport.salesReportList,
          dataLen: salesReport.salesReportList.length
        }}
        pcontrolVal={this.props.pcontrolVal}
        productList={this.props.productList}
        cancelSale={this.cancelSale}
      />
    );
  }
}

const mapStateToProps = state => ({
  salesReport: state.salesReport,
  pcontrolVal: state.pcontrol.pcontrolVal,
  productList: state.product.productList
});

const maDispatchToProps = dispatch => ({
  salesReportAction: bindActionCreators(salesReportActionCreator, dispatch),
  pcontrolAction: bindActionCreators(pcontrolActionCreator, dispatch),
  productAction: bindActionCreators(productActionCreator, dispatch)
});

export default connect(mapStateToProps, maDispatchToProps)(
  SalesReportContainer
);
