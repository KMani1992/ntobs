import React, { Component } from "react";
import SalesInit from "../components/sales/Sales";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as salesActionCreator from "../actionCreators/Sales";
import * as productActionCreator from "../actionCreators/Product";
import * as pcontrolActionCreator from "../actionCreators/PControl";
import * as util from "../util/util";

class SalesContainer extends Component {
  constructor(props) {
    super(props);
  }

  removeSales = (e, idx) => {
    e && e.preventDefault();
    this.editSales(null, null);
    const { salesList } = this.props;
    //  console.log(idx)
    salesList.splice(idx, 1);
    this.props.salesAction.updateSalesList({
      salesList,
      saleListLength: this.props.salesProps.saleListLength + 1
    });
  };

  editSales = (e, value, idx = -1) => {
    e && e.preventDefault();
    console.log(e, value);

    let data = {
      product: "",
      metal: "",
      category: "",
      type: "weight",
      wastageType: "percentpg",
      wastage: 0,
      mcType: "valuepg",
      makingCharge: 0.0,
      otherCharge: 0.0,
      description: "",
      weight: 0.0,
      value: 0,
      quantity: 1,
      domain: "",
      mode: "create",
      tax: 0,
      rate: 0,
      netVal: 0,
      mcVal: 0,
      wasVal: 0,
      ocVal: 0,
      taxVal: 0,
      grosVal: 0,
      saleBillAmt: 0,
      saleQuantity: 0,
      saleWeight: 0,
      saleTax: 0
    };

    if (value instanceof Array) {
      //mcType,makingCharge,wastageType,wastage,type,rate,weight,quantity,otherCharge,tax
      const calcVal = this.calculateValue(
        value[6],
        value[7],
        value[4],
        value[5],
        value[3],
        value[14],
        value[10],
        value[9],
        value[8],
        value[13]
      );

      data = {
        metal: value[1] ? value[1] : "",
        category: value[2] ? value[2] : "",
        type: value[3],
        wastageType: value[4],
        wastage: Number(value[5]),
        mcType: value[6],
        makingCharge: Number(value[7]),
        otherCharge: isNaN(Number(value[8])) ? 0 : Number(value[8]),
        quantity: Number(value[9]),
        weight: Number(value[10]),
        description: value[11] ? value[11] : "",
        tax: value[13], //12 -13
        rate: value[14],
        product: value[15],
        netVal: calcVal[0],
        mcVal: calcVal[1],
        wasVal: calcVal[2],
        ocVal: calcVal[3],
        taxVal: calcVal[4],
        grosVal: calcVal[5],
        mode: this.props.sale.mode,
        idx: idx
      };
    } else if (value) {
      console.log("edit data", value);

      const calcVal = this.calculateValue(
        value.mcType,
        value.makingCharge,
        value.wastageType,
        value.wastage,
        value.type,
        value.rate,
        value.weight,
        value.quantity,
        value.otherCharge,
        value.tax
      );

      data = {
        product: value.productKey,
        metal: value.metal,
        category: value.category,
        type: value.type,
        wastageType: value.wastageType,
        wastage: value.wastage,
        mcType: value.mcType,
        makingCharge: value.makingCharge,
        otherCharge: value.otherCharge,
        description: value.description,
        weight: value.weight,
        rate: value.rate,
        tax: value.tax,
        quantity: value.quantity,
        status: value.status,
        domain: value.domain,
        mode: "edit",
        netVal: calcVal[0],
        mcVal: calcVal[1],
        wasVal: calcVal[2],
        ocVal: calcVal[3],
        taxVal: calcVal[4],
        grosVal: calcVal[5],
        idx
      };
    }
    console.log("updated data", data);
    this.props.salesAction.editSalesPopulate(data);
  };

  calculateValue(
    mcType,
    mc = 0,
    wasType,
    wast = 0,
    type,
    rate = 0,
    weight = 0,
    quantity = 1,
    otherCharge = 0,
    tax = 0
  ) {
    console.log(
      mcType,
      mc,
      wasType,
      wast,
      type,
      rate,
      weight,
      quantity,
      otherCharge,
      tax
    );

    const calcVal = [];
    let totVal = 0;

    if (type == "weight") {
      totVal = weight * rate;
    } else if (type == "rate") {
      totVal = quantity * rate;
    } else {
      totVal = rate;
    }

    //netAmt 0
    calcVal.push(totVal);

    console.log("totVal type", totVal);
    let mcval = 0;
    if (mcType == "percentpg") {
      mcval = weight * mc / 100;
      totVal += mcval;
    } else if (mcType == "valuepg") {
      mcval = weight * mc;
      totVal += mcval;
    } else if (mcType == "lumpsum") {
      mcval = quantity * mc;
      totVal += mcval;
    }

    //mcval 1
    calcVal.push(mcval);

    console.log("totVal mc", totVal);
    let wasVal = 0;
    if (wasType == "percentpg") {
      wasVal = weight * wast / 100;
      totVal += wasVal * rate;
    } else if (wasType == "valuepg") {
      wasVal = weight * wast;
      totVal += wasVal;
    } else if (wasType == "lumpsum") {
      wasVal = quantity * wast;
      totVal += wasVal;
    }
    //wastval 2
    calcVal.push(wasVal);

    console.log("totVal wast", totVal);
    totVal += isNaN(Number(otherCharge)) ? 0 : Number(otherCharge);

    //oc 3
    calcVal.push(otherCharge);

    console.log("totVal oc", totVal);
    let txval = totVal * tax / 100;
    totVal += txval;

    //tax val 4
    calcVal.push(txval);
    console.log("totVal tax", totVal);

    //tot val 5
    calcVal.push(Math.round(totVal, 0));
    return calcVal;
  }

  componentDidMount() {
    this.props.productAction.readProduct();
    this.props.pcontrolAction.readPControlVal({
      pid: "init",
      key: "METAL,CATEGORY,TYPE"
    });

    const element = document.querySelectorAll(".tabs");
    let instance = M.Tabs.init(element);
  }

  saveSales=(e) =>{
    e && e.preventDefault();
    console.log("save sal call")
    const { salesList,salesAction } = this.props;
    if (salesList.length > 0) {
      let lstSal = salesList[salesList.length - 1];
      let salListModify = [];
      salesList.map(d => {
        (d.saleBillAmt = lstSal.saleBillAmt),
          (d.saleQuantity = lstSal.saleQuantity),
          (d.saleWeight = lstSal.saleWeight),
          (d.saleTax = lstSal.saleTax);

        salListModify.push(d);
      });

      salesAction.createSales(salListModify);
    }
  }

  submit = values => {
    console.log("sales init submit", values);
    let data = {};
    const { sale } = this.props;

    //mcType,makingCharge,wastageType,wastage,type,rate,weight,quantity,otherCharge,tax
    let calcVal = this.calculateValue(
      values.mcType,
      values.makingCharge,
      values.wastageType,
      values.wastage,
      values.type,
      values.rate,
      values.weight,
      values.quantity,
      values.otherCharge,
      values.tax
    );

    const tot = this.calcTotal(
      calcVal[2],
      calcVal[5],
      values.quantity,
      values.weight
    );

    if (values) {
      let pdata = values.product.split(":");
      data = {
        productKey: values.product,
        name: pdata[12],
        product: pdata[0],
        metal: values.metal,
        category: values.category,
        type: values.type,
        wastageType: values.wastageType,
        wastage: values.wastage,
        mcType: values.mcType,
        makingCharge: values.makingCharge,
        otherCharge: values.otherCharge,
        description: values.description,
        weight: values.weight,
        quantity: values.quantity,
        tax: values.tax,
        rate: values.rate,

        netVal: calcVal[0],
        mcVal: calcVal[1],
        wasVal: calcVal[2],
        ocVal: calcVal[3],
        taxVal: calcVal[4],
        grosVal: calcVal[5],

        saleTax: tot[0],
        saleBillAmt: tot[1],
        saleQuantity: tot[2],
        saleWeight: tot[3],
        domain: util.getDomain(),
        updatedBy: util.getOperatorId()
      };
    }

    console.log("sales>", data);

    const { salesList } = this.props;
    if (sale.mode === "create") {
      salesList.push(data);
    } else if (sale.mode === "edit") {
      salesList.splice(this.props.sale.idx, 1, data);
    }
    this.props.salesAction.updateSalesList(salesList);

    this.editSales(null, null);
  };

  calcTotal = (curTax, curBillAmt, curQty, curWt) => {
    const { salesList } = this.props;
    let saleTax = 0,
      saleBillAmt = 0,
      saleQuantity = 0,
      saleWeight = 0.0,
      total = [];

    salesList.map(d => {
      saleTax += d.taxVal;
      saleBillAmt += d.grosVal;
      saleQuantity += d.quantity;
      saleWeight += d.weight;
    });
    saleTax += curTax;
    saleBillAmt += curBillAmt;
    saleQuantity += curQty;
    saleWeight += curWt;

    total.push(saleTax, saleBillAmt, saleQuantity, saleWeight);
    return total;
  };

  render() {
    // console.log("sal cont rm",salesList);
    return (
      <SalesInit
        onSubmit={this.submit}
        productList={this.props.productList}
        editSales={this.editSales}
        removeSales={this.removeSales}
        pcontrolVal={this.props.pcontrolVal}
        saveSales={this.saveSales}
      />
    );
  }
}

const mapStateToProps = state => ({
  productList: state.product.productList,
  sale: state.sales.default,
  salesList: state.sales.salesList,
  pcontrolVal: state.pcontrol.pcontrolVal,
  salesProps: state.sales
});

const maDispatchToProps = dispatch => ({
  productAction: bindActionCreators(productActionCreator, dispatch),
  pcontrolAction: bindActionCreators(pcontrolActionCreator, dispatch),
  salesAction: bindActionCreators(salesActionCreator, dispatch)
});

export default connect(mapStateToProps, maDispatchToProps)(SalesContainer);
