import React, { Component } from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { Link } from "react-router-dom";
import FormatDate from "../util/FormatDate";
import { connect } from "react-redux";
import "./Sales.css";

const status = ["active", "inactive", "locked"];

const wasType = ["percentpg", "valuepg", "lumpsum"];
const mcType = ["valuepg", "lumpsum", "percentpg"];
const itemType = ["rate", "weight"];

class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      salesList: []
    };
  }

  componentDidUpdate(prevProps) {
    const {
      common,
      editSales,
      selProduct,
      pcontrolVal,
      initialValues,salesListData
    } = this.props;
    if (prevProps.common.done !== common.done && common.done) {
      this.setState({ editMode: false });
      editSales(null, null);
    }

console.log("salesListData",salesListData);
    if(prevProps.salesListData!=salesListData){
console.log("salesListData inside if",salesListData);
    }

    if (
      selProduct!=="" && prevProps.selProduct !== selProduct &&
      pcontrolVal.valList &&
      pcontrolVal.valList.length > 1 && !this.state.editMode
    ) {
      console.log(selProduct, "selProduct chg");

      let spdata = selProduct.split(":");
      const catList = pcontrolVal.valList[1].value.split(",");
      let find = catList.some(val => {
        const cval = val.split(":");
        if (spdata[2] && spdata[2] == cval[0]) {
          spdata.push(cval[1]);
          return true;
        }
      });
      console.log("tax find ", find);
      //default tax
      if (!find) {
        spdata.push(12);
      }

      const matList = pcontrolVal.valList[0].value.split(",");
      let exis = matList.some(val => {
        const cval = val.split(":");
        if (spdata[1] && spdata[1] == cval[0]) {
          spdata.push(cval[1]);
          return true;
        }
      });
      console.log("rate find ", exis);
      //default rate
      if (!exis) {
        spdata.push(0);
      }

      spdata.push(selProduct);

      editSales(null, spdata);
    }

    if(this.state.editMode) this.setState({editMode:false});
  }

  componentDidMount() {
    console.log("inside sales");
    document.addEventListener("DOMContentLoaded", function() {
      const elems = document.querySelectorAll("select");
      const instances = M.FormSelect.init(elems);
    });
  }

  render() {
    const {
      handleSubmit,
      salesList,
      editSales,
      removeSales,
      reset,
      pcontrolVal,
      productList,
      saveSales
    } = this.props;
    console.log("salesList inside cmp",salesList);
    return (
      <main>
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row">
              <h5 className="left-align orange-text">Sales</h5>
            </div>
            <div className="row">
              <div className="col s12">
                <form onSubmit={handleSubmit} className="col s12">
                  <div className="row">
                    <div className="col s12 m6">
                      <label for="product">Product</label>
                      <div>
                        <Field
                          id="product"
                          name="product"
                          component="select"
                          className="browser-default"
                        >
                          <option />
                          {productList.map(prod => {
                            return (
                              <option
                                key={prod._id}
                                value={`${prod._id}:${prod.metal}:${prod.category}:${prod.type}:${prod.wastageType}:${prod.wastage}:${prod.mcType}:${prod.makingCharge}:${prod.otherCharge}:${prod.quantity}:${prod.weight}:${prod.description}:${prod.name}`}
                              >
                                {prod.name}
                              </option>
                            );
                          })}
                        </Field>
                      </div>
                    </div>
                    <div className="col s12 m3">
                      <label for="metal">Metal</label>
                      <Field
                        name="metal"
                        id="metal"
                        component="input"
                        type="text"
                        input={{ diabled: true }}
                      />
                    </div>
                    <div className="col s12 m3">
                      <label for="rate">Rate</label>
                      <Field
                        name="rate"
                        id="rate"
                        component="input"
                        type="text"
                        input={{ diabled: true }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12 m3">
                      <label for="category">Category</label>
                      <Field
                        name="category"
                        id="category"
                        component="input"
                        type="text"
                        input={{ diabled: true }}
                      />
                    </div>
                    <div className="col s12 m3">
                      <label for="tax">Tax</label>
                      <Field
                        name="tax"
                        id="tax"
                        component="input"
                        type="text"
                        className="validate"
                      />
                    </div>
                    <div className="col s12 m3">
                      <label for="type">Type</label>
                      <Field
                        name="type"
                        id="type"
                        component="input"
                        type="text"
                        input={{ diabled: true }}
                      />
                    </div>

                    <div className="col s12 m3">
                      <label for="wastageType">Wastage Type</label>
                      <div>
                        <Field
                          id="wastageType"
                          name="wastageType"
                          component="select"
                          className="browser-default"
                        >
                          {wasType.map(wtype => {
                            return (
                              <option key={wtype} value={wtype}>
                                {wtype}
                              </option>
                            );
                          })}
                        </Field>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12 m3">
                      <label for="wastage">Wastage</label>
                      <Field
                        name="wastage"
                        id="wastage"
                        component="input"
                        type="text"
                        className="validate"
                      />
                    </div>
                    <div className="col s12 m3">
                      <label for="mcType">MC Type</label>
                      <div>
                        <Field
                          id="mcType"
                          name="mcType"
                          component="select"
                          className="browser-default"
                        >
                          {mcType.map(mc => {
                            return (
                              <option key={mc} value={mc}>
                                {mc}
                              </option>
                            );
                          })}
                        </Field>
                      </div>
                    </div>

                    <div className="col s12 m3">
                      <label for="makingCharge" title="Making Charge Type">
                        Making Charge Type
                      </label>
                      <Field
                        name="makingCharge"
                        id="makingCharge"
                        component="input"
                        type="text"
                        className="validate"
                      />
                    </div>

                    <div className="col s12 m3">
                      <label for="otherCharge">Other Charge</label>
                      <Field
                        name="otherCharge"
                        id="otherCharge"
                        component="input"
                        type="text"
                        className="validate"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12 m3">
                      <label for="quantity">Quantity</label>
                      <Field
                        name="quantity"
                        id="quantity"
                        component="input"
                        type="text"
                        className="validate"
                      />
                    </div>
                    <div className="col s12 m3">
                      <label for="weight">Weight</label>
                      <Field
                        name="weight"
                        id="weight"
                        component="input"
                        type="text"
                        className="validate"
                      />
                    </div>
                    <div className="col s12 m3">
                      <label for="description">Description</label>
                      <Field
                        name="description"
                        id="description"
                        component="input"
                        type="text"
                        className="validate"
                      />
                    </div>
                    <div className="col s12 m3">
                      <button
                        className="btn waves-effect waves-light orange"
                        type="submit"
                        name="action"
                      >
                        Update
                      </button>&nbsp;&nbsp;
                      <button
                        type="button"
                        className="btn waves-effect waves-light orange"
                        onClick={e => {
                          this.setState({ editMode: false });
                          editSales(e, null);
                          reset();
                        }}
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="row">
                <div className="col s12 table-wrapper-scroll-x">
                  <table className="striped responsive-table pad2y">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Metal</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Wastage Type</th>
                        <th>Wastage</th>
                        <th>MC Type</th>
                        <th>MC</th>
                        <th>Other Charge</th>
                        <th>Description</th>
                        <th>Weight</th>
                        <th>Quantity</th>
                        <th>Tax</th>
                        <th>Rate</th>
                        <th>Net Value</th>
                        <th>MC Value</th>
                        <th>Wastage Value</th>
                        <th>OC Value</th>
                        <th>Tax Value</th>
                        <th>Gross Value</th>
                        <th>Edit</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {salesList.map((sales, i) => {
                        return (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{sales.name}</td>
                            <td>{sales.metal}</td>
                            <td>{sales.category}</td>
                            <td>{sales.type}</td>
                            <td>{sales.wastageType}</td>
                            <td>{sales.wastage}</td>
                            <td>{sales.mcType}</td>
                            <td>{sales.makingCharge}</td>
                            <td>{sales.otherCharge}</td>
                            <td>{sales.description}</td>
                            <td>{sales.weight}</td>
                            <td>{sales.quantity}</td>
                            <td>{sales.tax}</td>
                            <td>{sales.rate}</td>
                            <td>{sales.netVal}</td>
                            <td>{sales.mcVal}</td>
                            <td>{sales.wasVal}</td>
                            <td>{sales.ocVal}</td>
                            <td>{sales.taxVal}</td>
                            <td>{sales.grosVal}</td>

                            <td>
                              <button
                                className="btn waves-effect waves-light orange"
                                onClick={e => {
                                  console.log(sales);
                                  editSales(e, sales, i);
                                  this.setState({ editMode: true });
                                }}
                              >
                                Edit
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn waves-effect waves-light red"
                                onClick={e => {
                                  removeSales(e, i);
                                }}
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m2">
                  <button
                  onClick={saveSales}
                    className="btn waves-effect waves-light orange"
                    type="button"
                    name="action"
                  >
                    Save
                    <i className="material-icons right">send</i>
                  </button>
                </div>
                {salesList.length > 0 ? (
                  <React.Fragment>
                    <div className="col s12 m2">
                      <label for="totTax">Sale Tax</label>
                      <input
                        name="totTax"
                        id="totTax"                        
                        type="text"
                        value={salesList[salesList.length-1].saleTax}
                      />
                    </div>
                    <div className="col s12 m2">
                      <label for="saleBillAmt">Sale Bill Amt</label>
                      <input
                        name="saleBillAmt"
                        id="saleBillAmt"
                        value={salesList[salesList.length-1].saleBillAmt}
                        type="text"
                      />
                    </div>
                    <div className="col s12 m2">
                      <label for="saleQuantity">Sale Quantity</label>
                      <input
                        name="saleQuantity"
                        id="saleQuantity"
                        value={salesList[salesList.length-1].saleQuantity}
                        type="text"
                      />
                    </div>
                    <div className="col s12 m2">
                      <label for="saleWeight">Sale Weight</label>
                      <input
                        name="saleWeight"
                        id="saleWeight"
                        value={salesList[salesList.length-1].saleWeight}
                        type="text"
                      />
                    </div>
                    </React.Fragment>) : null}
                    <div className="col s12 m2">
                      <label for="lastbillno">Last BillNo</label>
                      <input
                        name="lastbillno"
                        id="lastbillno"
                        value={this.props.saleProps.billNo}
                        type="text"
                      />
                    </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const SalesInit = reduxForm({
  form: "sales",
  enableReinitialize: true
})(Sales);
const formValSel = formValueSelector("sales");
const mapStateToProps = state => ({
  initialValues: state.sales.default,
  salesList:state.sales.salesList,
  common: state.common,
  saleProps:state.sales,
  selProduct: formValSel(state, "product")
});

export default connect(mapStateToProps, null)(SalesInit);
