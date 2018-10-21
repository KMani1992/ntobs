import React, { Component } from "react";
import Product from "../components/product/Product";
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
    return <Product handleSubmit={this.submit} productList={this.props.productList} />;
  }
}

const mapStateToProps = state => ({
  productList: state.product.productList
});

const maDispatchToProps = dispatch => ({
  productAction: bindActionCreators(productActionCreator, dispatch)
});

export default connect(mapStateToProps, maDispatchToProps)(ProductContainer);
