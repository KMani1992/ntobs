import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import FormatDate from "../util/FormatDate";
import { connect } from "react-redux";

const status = ["active", "inactive","locked"];

const type=["text", "number","date"];

class PControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
  }

  componentDidUpdate(prevProps) {
    const { common, editPControl } = this.props;

    if (prevProps.common.done !== common.done && common.done) {
      this.setState({ editMode: false });
      editPControl(null, null);
    }
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      const elems = document.querySelectorAll("select");
      const instances = M.FormSelect.init(elems);
    });
  }

  render() {
    const { handleSubmit, pcontrolList, editPControl, reset } = this.props;
    return (
      <main>
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row">
              <h5 className="center-align orange-text">PControl</h5>
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
                      <label for="name">Parameter Name</label>
                      <Field
                        name="name"
                        id="name"
                        component="input"
                        type="text"
                        className="validate"
                      />
                    </div>
                    <div className="col s12 m6">
                      <label for="type">Parameter Type</label>
                      <div>
                        <Field
                          id="type"
                          name="type"
                          component="select"
                          className="browser-default"
                        >
                          {type.map(typ => {
                            return (
                              <option key={typ} value={typ}>
                                {typ}
                              </option>
                            );
                          })}
                        </Field>
                      </div>    
                    </div>
                  </div>
                  <div className="row">

                      <div className="col s12 m6">
                        <label for="value">Parameter Value</label>
                        <Field
                          name="value"
                          id="value"
                          component="input"
                          type="text"
                          className="validate"
                        />
                      </div>

                    <div className="col s12 m6">
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
                      </button>&nbsp;&nbsp;
                      <button
                        type="button"
                        className="btn waves-effect waves-light orange"
                        onClick={e => {
                          this.setState({ editMode: false });
                          editPControl(e, null);
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
                      <th>Type</th>
                      <th>Value</th>
                      <th>Status</th>                      
                      <th>Created</th>
                      <th>Updated</th>
                      <th>Updated By</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pcontrolList.map((pcontol, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{pcontol.name}</td>
                          <td>{pcontol.type}</td>
                          <td>{pcontol.value}</td>
                          <td>{pcontol.status}</td>                                                    
                          <td>
                            <FormatDate date={pcontol.created} />
                          </td>
                          <td>
                            <FormatDate date={pcontol.updated} />
                          </td>
                          <td>
                            {pcontol.updatedBy ? pcontol.updatedBy : null}
                          </td>
                          <td>
                            <button
                              className="btn waves-effect waves-light orange"
                              onClick={e => {
                                console.log(pcontol);
                                editPControl(e, pcontol);
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

const PControlInit = reduxForm({
  form: "pcontrol",
  enableReinitialize: true
})(PControl);

const mapStateToProps = state => ({
  initialValues: state.pcontrol.default,
  common: state.common
});

export default connect(mapStateToProps, null)(PControlInit);
