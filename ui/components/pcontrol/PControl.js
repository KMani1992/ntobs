import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as pcontrolActionCreator from "../../actionCreators/PControl";

class PControl extends Component {
  constructor(props) {
    super(props);
    document.addEventListener("DOMContentLoaded", () => {
      const element = document.querySelectorAll(".tabs");
      const instance = M.Tabs.init(element);
    });
  }

  editPControl = e => {
    console.log(e.value);
    this.props.load.editPControlPopulate(e.value);
  };
  render() {
    const { handleSubmit, pcontrolList } = this.props;
/**
 * name: { type: String },
    type: { type: String, enum: ["text", "number","date"], default: "text" },
    value: { type: String},
    status: { type: String, enum: ["active", "inactive", "locked"],default:"active" },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    updatedBy: { type: schema.Types.ObjectId, ref: "operator" },
    domain:
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
                    <h5 className="left-align orange-text">PControl</h5>
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
                        name="paramName"
                        id="paramName"
                        component="input"
                        type="text"
                        className="validate"
                      />
                      <label for="paramName">Parameter Name</label>
                    </div>

                    <div className="input-field col s12 m6">
                      <Field
                        name="paramType"
                        id="paramType"
                        component="combobox"                        
                        className="validate"
                      />
                      <label for="paramType">Parameter Type</label>
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
                        type="checkbox"
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
                    {pcontrolList.map((pcontrol, i) => {
                      return (
                        <tr key={i}>
                          <td>{pcontrol.name}</td>
                          <td>{pcontrol.login}</td>
                          <td>
                            <button
                              value={pcontrol}
                              onClick={this.editpcontrol}
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
  initialValues: state.pcontrol.default
});

const mapActionToProps = {
  load: pcontrolActionCreator
};

export default reduxForm({ form: "pcontrol" })(PControl);
