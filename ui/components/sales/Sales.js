import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as salesActionCreator from "../../actionCreators/Sales";

class Sales extends Component {
  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      const element = document.querySelectorAll(".tabs");
      const instance = M.Tabs.init(element);
    });
  }

  editSales = e => {
    console.log(e.value);
    this.props.load.editSalesPopulate(e.value);
  };
  render() {
    const { handleSubmit, salesList } = this.props;

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
                    <h5 className="left-align orange-text">sales</h5>
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
                        name="userName"
                        id="name"
                        component="input"
                        type="text"
                        className="validate"
                      />
                      <label for="name">User Name</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <Field
                        name="login"
                        id="login"
                        component="input"
                        type="email"
                        className="validate"
                      />
                      <label for="login">Login ID (eg:sample@email.com)</label>
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
                        name="userType"
                        id="userType"
                        component="input"
                        type="text"
                        className="validate"
                      />
                      <label for="userType">User Type</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 m6">
                      <Field
                        name="authType"
                        id="authType"
                        component="input"
                        type="text"
                        className="validate"
                      />
                      <label for="authType">Auth Type</label>
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
                    <div className="input-field col s12 m6">
                      <Field
                        name="password"
                        id="password"
                        component="input"
                        type="password"
                        className="validate"
                      />
                      <label for="password">Password</label>
                    </div>
                    <div className="input-field col s12 m6">
                      <Field
                        name="created"
                        id="created"
                        component="input"
                        type="text"
                        className="validate"
                      />
                      <label for="created">Created</label>
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
                      <th>Name</th>
                      <th>Login</th>
                      <th>Domain</th>
                      <th>User Type</th>
                      <th>Auth Type</th>
                      <th>Status</th>
                      <th>Created</th>
                      <th>Updated</th>
                      <th>Updated By</th>
                      <th>Password</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesList.map((sales, i) => {
                      return (
                        <tr key={i}>
                          <td>{sales.name}</td>
                          <td>{sales.login}</td>
                          <td>
                            <button
                              value={sales}
                              onClick={this.editsales}
                            >
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
  initialValues: state.sales.default
});

const mapActionToProps = {
  load: salesActionCreator
};

export default reduxForm({ form: "sales" })(Sales);
