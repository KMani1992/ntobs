import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as salesreportActionCreator from "../../actionCreators/SalesReport";

class SalesReport extends Component {
  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      const element = document.querySelectorAll(".tabs");
      const instance = M.Tabs.init(element);
    });
  }

  editSalesReport = e => {
    console.log(e.value);
    this.props.load.editSalesReportPopulate(e.value);
  };
  render() {
    const { handleSubmit, salesreportList } = this.props;

    return (
      <main>
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row">
              <div id="entry" className="col s12">
                <form onSubmit={handleSubmit} className="col s12">
                  <div className="row no-pad-left">
                    <h5 className="left-align orange-text">salesreport</h5>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 m4">
                      <Field
                        name="fromDate"
                        id="fromDate"
                        component="input"
                        type="date"
                        className="validate"
                      />
                      <label for="fromDate">From Date</label>
                    </div>

                    <div className="input-field col s12 m4">
                      <Field
                        name="toDate"
                        id="toDate"
                        component="input"
                        type="date"
                        className="validate"
                      />
                      <label for="toDate">To Date</label>
                    </div>

                    <div className="input-field col s12 m4">
                      <button
                        className="btn waves-effect waves-light orange"
                        type="submit"
                        name="action"
                      >
                        Load
                        <i className="material-icons right">send</i>
                      </button>
                    </div>
                  </div>

                  <br />
                  <br />
                  <br />
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  initialValues: state.salesreport.default
});

const mapActionToProps = {
  load: salesreportActionCreator
};

export default reduxForm({ form: "salesreport" })(SalesReport);
