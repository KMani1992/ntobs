import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import FormatDate from "../util/FormatDate";
import { connect } from "react-redux";

const status = ["active", "inactive", "locked"];

const wasType = ["percentpg", "valuepg", "lumpsum"];
const mcType = ["valuepg", "lumpsum", "percentpg"];
const itemType = ["rate", "weight"];

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
  }

  componentDidUpdate(prevProps) {
    const { common, editProduct } = this.props;

    if (prevProps.common.done !== common.done && common.done) {
      this.setState({ editMode: false });
      editProduct(null, null);
    }
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      const elems = document.querySelectorAll("select");
      const instances = M.FormSelect.init(elems);
    });
  }

  render() {
    const {
      handleSubmit,
      productList,
      editProduct,
      reset,
      pcontrolVal
    } = this.props;
    return (
      <main>
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row">
              <h5 className="center-align orange-text">Product</h5>
            </div>
            <div className="row">
              <div className="col s12">
                <ul className="tabs">
                  <li id="tab1" className="tab col s3">
                    <Link to="#entry">Entry</Link>
                  </li>
                  <li id="tab2" className="tab col s3">
                    <Link to="#view">View</Link>
                  </li>
                </ul>
              </div>
              <div id="entry" className="col s12">
                <form onSubmit={handleSubmit} className="col s12">
                  <div className="row">
                    <div className="col s12 m4">
                      <label for="name">Product Name</label>
                      <Field
                        name="name"
                        id="name"
                        component="input"
                        type="text"
                        className="validate"
                      />
                    </div>
                    <div className="col s12 m4">
                      <label for="metal">Metal</label>
                      <div>
                        <Field
                          id="metal"
                          name="metal"
                          component="select"
                          className="browser-default"
                        >
                          {pcontrolVal.length > 0 &&
                            pcontrolVal[0].map(metal => {
                              return (
                                <option key={metal} value={metal}>
                                  {metal}
                                </option>
                              );
                            })}
                        </Field>
                      </div>
                    </div>

                    <div className="col s12 m4">
                      <label for="category">Category</label>
                      <div>
                        <Field
                          id="category"
                          name="category"
                          component="select"
                          className="browser-default"
                        >
                          {pcontrolVal.length > 1 &&
                            pcontrolVal[1].map(cat => {
                              return (
                                <option key={cat} value={cat}>
                                  {cat}
                                </option>
                              );
                            })}
                        </Field>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12 m4">
                      <label for="metal">Product Type</label>
                      <div>
                        <Field
                          id="type"
                          name="type"
                          component="select"
                          className="browser-default"
                        >
                          {pcontrolVal.length > 2 &&
                            pcontrolVal[2].map(typ => {
                              return (
                                <option key={typ} value={typ}>
                                  {typ}
                                </option>
                              );
                            })}
                        </Field>
                      </div>
                    </div>

                    <div className="col s12 m4">
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

                    <div className="col s12 m4">
                      <label for="wastage">Wastage</label>
                      <Field
                        name="wastage"
                        id="wastage"
                        component="input"
                        type="text"
                        className="validate"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12 m4">
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

                    <div className="col s12 m4">
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

                    <div className="col s12 m4">
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
                    <div className="col s12 m4">
                      <label for="description">Description</label>
                      <Field
                        name="description"
                        id="description"
                        component="input"
                        type="text"
                        className="validate"
                      />
                    </div>

                    <div className="col s12 m4">
                      <label for="weight">Weight</label>
                      <Field
                        name="weight"
                        id="weight"
                        component="input"
                        type="text"
                      />
                    </div>

                    <div className="col s12 m4">
                      <label for="value">Value</label>
                      <Field
                        name="value"
                        id="value"
                        component="input"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12 m4">
                      <label for="quantity">Quantity</label>
                      <Field
                        name="quantity"
                        id="quantity"
                        component="input"
                        type="text"
                      />
                    </div>

                    <div className="col s12 m4">
                      <label for="status">Status</label>
                      <div>
                        <Field
                          id="status"
                          name="status"
                          component="select"
                          className="browser-default"
                        >
                          {status.map(sts => {
                            return (
                              <option key={sts} value={sts}>
                                {sts}
                              </option>
                            );
                          })}
                        </Field>
                      </div>
                    </div>

                    <div className="input-field col s12 m4">
                      <button
                        className="btn waves-effect waves-light orange"
                        type="submit"
                        name="action"
                      >
                        Save
                        <i className="material-icons right">send</i>
                      </button>&nbsp;&nbsp;
                      <button
                        type="button"
                        className="btn waves-effect waves-light orange"
                        onClick={e => {
                          this.setState({ editMode: false });
                          editProduct(e, null);
                          reset();
                        }}
                      >
                        Reset
                      </button>
                    </div>
                  </div>

                  <br />
                  <br />
                  <br />
                  <br />
                </form>
              </div>
              <div id="view" className="col s12">
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
                      <th>Value</th>
                      <th>Quantity</th>
                      <th>Status</th>
                      <th>Created</th>
                      <th>Updated</th>
                      <th>Updated By</th>
                      <th>Domain</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((product, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{product.name}</td>
                          <td>{product.loginId}</td>
                          <td>{product.domain}</td>
                          <td>{product.type}</td>
                          <td>{product.authType}</td>
                          <td>{product.status}</td>
                          <td>
                            <FormatDate date={product.created} />
                          </td>
                          <td>
                            <FormatDate date={product.updated} />
                          </td>
                          <td>
                            {product.updatedBy ? product.updatedBy : null}
                          </td>
                          <td>
                            <button
                              className="btn waves-effect waves-light orange"
                              onClick={e => {
                                console.log(product);
                                editProduct(e, product);
                                this.setState({ editMode: true });
                              }}
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const ProductInit = reduxForm({
  form: "product",
  enableReinitialize: true
})(Product);

const mapStateToProps = state => ({
  initialValues: state.product.default,
  common: state.common
});

export default connect(mapStateToProps, null)(ProductInit);
