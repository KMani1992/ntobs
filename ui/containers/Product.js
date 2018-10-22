import React, { Component } from "react";
import ProductInit from "../components/product/Product";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActionCreator from "../actionCreators/Product";
import * as pcontrolActionCreator from "../actionCreators/PControl";
import * as util from "../util/util";

class ProductContainer extends Component {
  constructor(props) {
    super(props);
  }

  editProduct = (e, value) => {
    e && e.preventDefault();
    console.log(e, value);
    let data = {
      name: "",
      metal: "",
      category: "",
      type: "weight",
      wastageType: "percentpg",
      wastage: "",
      mcType: "valuepg",
      makingCharge: "0.0",
      otherCharge: "0.0",
      description: "",
      weight: "0.0",
      value: "0",
      quantity: "1",
      status: "active",
      domain: "",
      mode: "create",
      id: ""
    };

    if (value) {
      const element = document.getElementsByName(".tabs");
      let instance = M.Tabs.getInstance(element);
      //instance.select("tab1")
      data = {
        name: value.name,
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
        value: value.value,
        quantity: value.quantity,
        status: value.status,
        domain: value.domain,
        mode: "edit",
        id: value._id
      };
    }

    console.log("updated data", data);
    this.props.productAction.editProductPopulate(data);
  };

  componentDidMount() {
    this.props.productAction.readProduct();
    this.props.pcontrolAction.readPControlVal({
      pid: "init",
      key: "METAL,CATEGORY"
    });
    const element = document.querySelectorAll(".tabs");
    let instance = M.Tabs.init(element);
  }

  submit = values => {
    console.log("product", values);
    let product = {};

    if (values) {
      product = {
        name: values.name,
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
        value: values.value,
        quantity: values.quantity,

        status: "active",
        domain: util.getDomain(),
        updatedBy: util.getOperatorId()
      };
    }

    if (values.mode === "create") {
      this.props.productAction.createProduct(product);
    } else if (values.mode === "edit") {
      product.id = this.props.product.id;
      this.props.productAction.editProduct(product);
    }
  };

  render() {
    return (
      <ProductInit
        onSubmit={this.submit}
        productList={this.props.productList}
        editProduct={this.editProduct}
        pcontrolVal={this.props.pcontrolVal}
      />
    );
  }
}

const mapStateToProps = state => ({
  productList: state.product.productList,
  product: state.product.default,
  pcontrolVal: state.pcontrol.pcontrolVal
});

const maDispatchToProps = dispatch => ({
  productAction: bindActionCreators(productActionCreator, dispatch),
  pcontrolAction: bindActionCreators(pcontrolActionCreator, dispatch)
});

export default connect(mapStateToProps, maDispatchToProps)(ProductContainer);
