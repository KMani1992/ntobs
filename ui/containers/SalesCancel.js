import React, { Component } from "react";
import SalesCancelInit from "../components/salesCancel/SalesCancel";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as salesActionCreator from "../actionCreators/Sales";
import * as util from "../util/util";

class SalesCancelContainer extends Component {
  constructor(props) {
    super(props);
  }

  cancelSale = (e, billNo) => {
    e && e.preventDefault();
    const { salesReport } = this.props;
    console.log("sales bill number", billNo);

    let cancelData = {
      cancelled: "Y",
      cancelledDate: Date.now,
      CancelledBy: util.getOperatorId(),
      domain: util.getDomain(),
      CancelledDescription: "Canceled by user"
    };

    this.props.salesAction.cancelSaleBill({
      billNo: billNo,
      cancelData
    });
  };

  editSales(e,data){
    this.props.salesAction.clearCancelSaleBill({billNo:"",CancelledDescription:""})
  }

  render() {
    return <SalesCancelInit editSales={this.editSales} />;
  }
}

const mapStateToProps = state => ({
  salesCancelProps: state.salesCancel
});

const maDispatchToProps = dispatch => ({
  salesAction: bindActionCreators(salesActionCreator, dispatch)
});

export default connect(mapStateToProps, maDispatchToProps)(
  SalesCancelContainer
);
