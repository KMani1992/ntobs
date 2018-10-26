import React, { Component } from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import "./SalesCancel.css";

class SalesCancel extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {

    const { common, editSales,reset } = this.props;

    if (prevProps.common.done !== common.done && common.done) {
      editSales(null, null);
      reset();
    }
  }

  render() {
    const { handleSubmit, editSales, reset } = this.props;

    return (
      <main>
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row">
              <h5 className="left-align orange-text">Sales Cancel</h5>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col s12 m3">
                  <label for="billNo">Bill Number</label>
                  <Field
                    name="billNo"
                    id="billNo"
                    component="input"
                    type="text"
                    className="validate"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label for="CancelledDescription">Cancel Description</label>
                  <Field
                    name="CancelledDescription"
                    id="CancelledDescription"
                    component="input"
                    type="text"
                    className="validate"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s12 m3">
                  <button
                    className="btn waves-effect waves-light red"
                    type="submit"
                    name="action"
                  >
                    Cancel
                  </button>&nbsp;&nbsp;
                  <button
                    type="button"
                    className="btn waves-effect waves-light orange"
                    onClick={e => {
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
        </div>
      </main>
    );
  }
}

const SalesCancelInit = reduxForm({
  form: "sales-cancel",
  enableReinitialize: true
})(SalesCancel);

const mapStateToProps = state => ({
  initialValues: state.salesCancel,
  common: state.common
});

export default connect(mapStateToProps, null)(SalesCancelInit);
