import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import FormatDate from "../util/FormatDate";
import { connect } from "react-redux";

const status = ["active", "inactive"];

class Operator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
  }

  componentDidUpdate(prevProps) {
    const { common, editOperator } = this.props;

    if (prevProps.common.done !== common.done && common.done) {
      this.setState({ editMode: false });
      editOperator(null, null);
    }
  }

  render() {
    const { handleSubmit, operatorList, editOperator, reset } = this.props;

    return (
      <main>
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row">
              <h5 className="center-align orange-text">Operator</h5>
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
                    <div className="col s12 m6">
                      <label for="name">User Name</label>
                      <Field
                        name="userName"
                        id="name"
                        component="input"
                        type="text"
                        className="validate"
                      />
                    </div>
                    <div className="col s12 m6">
                      <label for="login">Login ID (eg:sample@email.com)</label>
                      <Field
                        name="login"
                        id="login"
                        component="input"
                        type="email"
                        className="validate"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12 m6">
                      <label for="status">Status</label>
                      <Field name="status" component="select">
                        {status.map(sts => {
                          return (
                            <option key={sts} value={sts}>
                              {sts}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
                    {!this.state.editMode && (
                      <div className="col s12 m6">
                        <label for="password">Password</label>
                        <Field
                          name="password"
                          id="password"
                          component="input"
                          type="password"
                          className="validate"
                        />
                      </div>
                    )}
                  </div>
                  <div className="row">
                    <div className="input-field col s12 m6">
                      <button
                        className="btn waves-effect waves-light orange"
                        type="submit"
                        name="action"
                      >
                        Save
                        <i className="material-icons right">send</i>
                      </button>&nbsp;
                      <button
                        type="button"
                        className="btn waves-effect waves-light orange"
                        onClick={e => {
                          this.setState({ editMode: false });
                          editOperator(e, null);
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
                      <th>Name</th>
                      <th>Login</th>
                      <th>Domain</th>
                      <th>User Type</th>
                      <th>Auth Type</th>
                      <th>Status</th>
                      <th>Created</th>
                      <th>Updated</th>
                      <th>Updated By</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    {operatorList.map((operator, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{operator.name}</td>
                          <td>{operator.loginId}</td>
                          <td>{operator.domain}</td>
                          <td>{operator.type}</td>
                          <td>{operator.authType}</td>
                          <td>{operator.status}</td>
                          <td>
                            <FormatDate date={operator.created} />
                          </td>
                          <td>
                            <FormatDate date={operator.updated} />
                          </td>
                          <td>
                            {operator.updatedBy ? operator.updatedBy : null}
                          </td>
                          <td>
                            <button
                              className="btn waves-effect waves-light orange"
                              onClick={e => {
                                console.log(operator);
                                editOperator(e, operator);
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
                <br/>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const OperatorInit = reduxForm({
  form: "operator",
  enableReinitialize: true
})(Operator);

const mapStateToProps = state => ({
  initialValues: state.operator.default,
  common: state.common
});

export default connect(mapStateToProps, null)(OperatorInit);
