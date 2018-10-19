import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as productActionCreator from "../../actionCreators/Product";

class Product extends Component {
  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      const element = document.querySelectorAll(".tabs");
      const instance = M.Tabs.init(element);
    });
  }

  editProduct = e => {
    console.log(e.value);
    this.props.load.editProductPopulate(e.value);
  };
  render() {
    const { handleSubmit, productList } = this.props;

    /**
 * 
 *     name: { type: String },
    metal: { type: String },
    category: { type: String },
    type: { type: String, enum: ["rate", "weight"], default: "weight" },
    wastageType: { type: String, enum: ["percentpg", "valuepg","lumpsum"],
     default: "percentpg" },
    wastage: { type: Number },
    mcType: { type: String, enum: ["percentpg", "valuepg","lumpsum"], 
    default: "valuepg" },
    makingCharge: { type: Number,default:0.0 },
    otherCharge: { type: Number,default:0.0 },
    description: { type: String,default:"" },
    weight: { type: Number,default:0.0 },
    value: { type: Number,default:0 },    
    quantity: { type: Number,default:1 },
    status: { type: String, enum: ["active", "inactive", "locked"] },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    updatedBy: { type: schema.Types.ObjectId, ref: "operator" },
    domain
 */
    return (
      <main>
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <ul className="tabs">
                  <li className="tab col s3">
                    <Link to="#entry">Entry</Link>
                  </li>
                  <li className="tab col s3">
                    <Link to="#view">View</Link>
                  </li>
                </ul>
              </div>
              <div id="entry" className="col s12">
                <form onSubmit={handleSubmit} className="col s12">
                  <div className="row no-pad-left">
                    <h5 className="left-align orange-text">Product</h5>
                    <Field
                      name="mode"
                      id="mode"
                      component="input"
                      type="hidden"
                    />
                  </div>
                  <div className="row">
                    <div className="input-field col s12 m6">
                      <Field
                        name="productName"
                        id="name"
                        component="input"
                        type="text"
                        className="validate"
                      />
                      <label for="name">Product Name</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <Field
                        name="metal"
                        id="metal"
                        component="input"
                        type="combobox"
                        className="validate"
                      />
                      <label for="login">Metal</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12 m6">
                      <Field
                        name="category"
                        id="name"
                        component="input"
                        type="combobox"
                        className="validate"
                      />
                      <label for="name">Category Name</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <Field
                        name="productType"
                        id="type"
                        component="input"
                        type="combobox"
                        className="validate"
                      />
                      <label for="login">Product Type</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12 m6">
                      <Field
                        name="wastageType"
                        id="name"
                        component="input"
                        type="combobox"
                        className="validate"
                      />
                      <label for="name">Wastage authType</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <Field
                        name="wastage"
                        id="type"
                        component="input"
                        type="combobox"
                        className="validate"
                      />
                      <label for="login">Wastage</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12 m6">
                      <Field
                        name="mcType"
                        id="name"
                        component="input"
                        type="combobox"
                        className="validate"
                      />
                      <label for="name">MakingCharge Type</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <Field
                        name="makingCharge"
                        id="mcType"
                        component="input"
                        type="combobox"
                        className="validate"
                      />
                      <label for="mcType">Making Charge</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12 m6">
                      <Field
                        name="otherCharge"
                        id="otherCharge"
                        component="input"
                        type="number"
                        className="validate"
                      />
                      <label for="otherCharge">Other Charge</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <Field
                        name="description"
                        id="description"
                        component="input"
                        type="text"
                        className="validate"
                      />
                      <label for="login">Description</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12 m6">
                      <Field
                        name="weight"
                        id="weight"
                        component="input"
                        type="number"
                        className="validate"
                      />
                      <label for="weight">Weight</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <Field
                        name="value"
                        id="value"
                        component="input"
                        type="number"
                        className="validate"
                      />
                      <label for="value">Value</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12 m6">
                      <Field
                        name="domain"
                        id="domain"
                        component="input"
                        type="text"
                        className="validate"
                      />
                      <label for="domain">Domain Name</label>
                    </div>
                    <div className="input-field col s12 m6">
                      <Field
                        name="status"
                        id="status"
                        component="input"
                        type="text"
                        className="validate"
                      />
                      <label for="status">Status</label>
                    </div>
                  </div>

                  <div className="row">
                    <button
                      className="btn waves-effect waves-light orange"
                      type="submit"
                      name="action"
                    >
                      Save
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                </form>
              </div>
              <div id="view" className="col s12">
                <table>
                  <thead>
                    <tr>
                      <th>S.no.</th>
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
                          <td>{product.name}</td>
                          <td>{product.login}</td>
                          <td>
                            <button value={product} onClick={this.editproduct}>
                              Edit
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  initialValues: state.product.default
});

const mapActionToProps = {
  load: productActionCreator
};

export default reduxForm({ form: "product" })(Product);
