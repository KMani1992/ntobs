import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as salesreportActionCreator from "../../actionCreators/SalesReport";

// require("datatables.net-dt")();
// require("datatables.net-buttons-dt")();
// require("datatables.net-buttons/js/buttons.colVis.js")();
// require("datatables.net-buttons/js/buttons.flash.js")();

//const $ = require("jquery");

//var $  = require( 'jquery' );
//var dt = require( 'datatables.net' )( window, $ );

class SalesReport extends Component {
  constructor(props) {
    super(props);
    document.addEventListener("DOMContentLoaded", () => {
      const element = document.querySelectorAll(".tabs");
      const instance = M.Tabs.init(element);
    });
  }

componentDidMount(){
  //$.DataTable = require("datatables.net");
  //var $  = require( 'jquery' );
  //var dt = require( 'datatables.net' );

//   (function($) {
//   $(function() {
//     //$(".sidenav").sidenav();
//     $('#myTable').DataTable();
//   }); // end of document ready
// })(jQuery); // end of jQuery name space

}
  componentDidUpdate(prevProps) {
    const { rptData } = this.props;
    console.log("rptData",rptData);

    if (prevProps.rptData != rptData) {

      (function($) {
  $(function() {
    //$(".sidenav").sidenav();
    $('#myTable').DataTable({
        data: rptData.salesList,
        columns: [
          { title: "#" },
          { title: "Product Name" },
          { title: "Metal" },
          { title: "Category" },
          { title: "Type" },
          { title: "Wastage Type" },
          { title: "Wastage" },
          { title: "MC Type" },
          { title: "MC" },
          { title: "Other Charge" },
          { title: "Description" },
          { title: "Weight" },
          { title: "Quantity" },
          { title: "Tax" },
          { title: "Rate" },
          { title: "Net Value" },
          { title: "MC Value" },
          { title: "Wastage Value" },
          { title: "OC Value" },
          { title: "Tax Value" },
          { title: "Gross Value" },
          { title: "Edit" },
          { title: "Remove" }
        ]
      });
  }); // end of document ready
})(jQuery); // end of jQuery name space


    }
  }

  editSalesReport = e => {
    console.log(e.value);
    this.props.load.editSalesReportPopulate(e.value);
  };
  render() {
    const {
      handleSubmit,
      pcontrolVal,
      productList,
      cancelSale      
    } = this.props;

    return (
      <main>
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row">
              <form onSubmit={handleSubmit} className="col s12">
                <div className="row no-pad-left">
                  <h5 className="left-align orange-text">salesreport</h5>
                </div>
                <div className="row">
                  <div className="input-field col s12 m3">
                    <Field
                      name="fromDate"
                      id="fromDate"
                      component="input"
                      type="date"
                      className="validate"
                    />
                    <label for="fromDate">From Date</label>
                  </div>

                  <div className="input-field col s12 m3">
                    <Field
                      name="toDate"
                      id="toDate"
                      component="input"
                      type="date"
                      className="validate"
                    />
                    <label for="toDate">To Date</label>
                  </div>

                  <div className="col s12 m3">
                    <label for="metal">Metal</label>
                    <div>
                      <Field
                        id="metal"
                        name="metal"
                        component="select"
                        className="browser-default"
                      >
                        <option value="" />
                        {pcontrolVal.valList.length > 0 &&
                          pcontrolVal.valList[0].value.split(",").map(metal => {
                            return (
                              <option key={metal} value={metal.split(":")[0]}>
                                {metal.split(":")[0]}
                              </option>
                            );
                          })}
                      </Field>
                    </div>
                  </div>

                  <div className="col s12 m3">
                    <label for="category">Category</label>
                    <div>
                      <Field
                        id="category"
                        name="category"
                        component="select"
                        className="browser-default"
                      >
                        <option value="" />
                        {pcontrolVal.valList.length > 1 &&
                          pcontrolVal.valList[1].value.split(",").map(cat => {
                            return (
                              <option key={cat} value={cat.split(":")[0]}>
                                {cat.split(":")[0]}
                              </option>
                            );
                          })}
                      </Field>
                    </div>
                  </div>
                </div>

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
                              value={`${prod._id}:${prod.name}`}
                            >
                              {prod.name}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
                  </div>
                  <div className="col s12 m3">
                    <label for="lastbillno">Last Bill Number</label>
                    <input name="lastbillno" id="lastbillno" type="text" />
                  </div>

                  <div className="input-field col s12 m3">
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
              </form>
            </div>
            <div className="row">
              <div className="col s12 table-wrapper-scroll-x">
                <table
                  className="striped responsive-table pad2y"
                  id="myTable"
                />
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </main>
    );
  }
}

const SalesReportInit = reduxForm({
  form: "salesreport",
  enableReinitialize: true
})(SalesReport);

const mapStateToProps = state => ({
  initialValues: state.salesReport.default,
  common: state.common
});

export default connect(mapStateToProps, null)(SalesReportInit);
