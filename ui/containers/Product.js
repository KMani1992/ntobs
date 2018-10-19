import React, { Component } from "react";
import Operator from "../components/product/Product";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActionCreator from "../actionCreators/Product";

class ProductContainer extends Component {
  submit = values => {
    if (values.mode === "create") {
      this.props.operatorAction.createProduct(values);
    } else if (values.mode === "edit") {
      this.props.operatorAction.editProduct(values);
    }
  };

  render() {
    return <Product handleSubmit={this.submit} />;
  }
}

const mapStateToProps = state => ({
  productList: state.productList
});

const maDispatchToProps = dispatch => ({
  productAction: bindActionCreators(productActionCreator, dispatch)
});

export default connect(mapStateToProps, maDispatchToProps)(ProductContainer);
