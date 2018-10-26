import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as salesreportActionCreator from "../../actionCreators/SalesReport";
const moment = require("moment");

// require("datatables.net-dt")();
// require("datatables.net-buttons-dt")();
// require("datatables.net-buttons/js/buttons.colVis.js")();
// require("datatables.net-buttons/js/buttons.flash.js")();

//const $ = require("jquery");

//var $  = require( 'jquery' );
//var dt = require( 'datatables.net' )( window, $ );
let datatableRef = null;
let dataHead = [
  "billDate",
  "billNo",
  "cancelled",
  "product",
  "metal",
  "category",
  "type",
  "wastageType",
  "wastage",
  "mcType",
  "makingCharge",
  "otherCharge",
  "description",
  "weight",
  "quantity",
  "tax",
  "rate",
  "netVal",
  "mcVal",
  "wasVal",
  "ocVal",
  "taxVal",
  "grosVal"
];

class SalesReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datatableRef: null,
      productKeyVal: {}
    };
  }

  componentDidUpdate(prevProps) {
    const { rptData, productList } = this.props;

    console.log("rptData", rptData, prevProps.rptData != rptData, datatableRef);

    if (prevProps.productList != productList) {
      console.log("inside prod list did update");
      let productKeyVal = {};
      productList.forEach(pl => {
        productKeyVal[pl._id] = pl.name;
      });

      this.setState({ productKeyVal });
    }

    if (
      prevProps.rptData != rptData &&
      datatableRef != null &&
      rptData.salesReport
    ) {
      let prkey = this.state.productKeyVal;

      console.log("rptData.salesReport", rptData.salesReport);
      const mastDt = [];
      let sNo = 0;

      rptData.salesReport.forEach(dt => {
        sNo += 1;
        console.log("dt", sNo, dt);

        mastDt.push([
          sNo,
          moment(dt.billDate).format("DD/MM/YYYY HH:mm:ss"),
          dt.billNo,
          dt.cancelled,
          prkey[dt.product],
          dt.metal,
          dt.category,
          dt.type,
          dt.wastageType,
          dt.wastage,
          dt.mcType,
          dt.makingCharge,
          dt.otherCharge,
          dt.description,
          dt.weight,
          dt.quantity,
          dt.tax,
          dt.rate,
          dt.netVal,
          dt.mcVal,
          dt.wasVal,
          dt.ocVal,
          dt.taxVal,
          dt.grosVal
        ]);
      });

      console.log("mastDt", mastDt);

      datatableRef.clear().draw();
      datatableRef.rows.add(mastDt);
      datatableRef.columns.adjust().draw();
    }
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      const elems = document.querySelectorAll("select");
      const instances = M.FormSelect.init(elems);
    });

    (function($) {
      $(function() {
        const buttonCommon = {
          exportOptions: {
            format: {
              body: function(data, row, column, node) {
                // Strip $ from salary column to make it numeric
                return column === 5 ? data.replace(/[$,]/g, "") : data;
              }
            }
          }
        };

        //$(".sidenav").sidenav();
        datatableRef = $("#myTable").DataTable({
          data: [],
          columns: [
            { title: "#" },
            { title: "Bill Date" },
            { title: "Bill Number" },
            { title: "Bill Cancelled" },
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
            { title: "Gross Value" }
          ],
          dom: "Bfrtip",
          buttons: [
            $.extend(true, {}, buttonCommon, {
              extend: "copyHtml5"
            }),
            $.extend(true, {}, buttonCommon, {
              extend: "excelHtml5"
            }),
            $.extend(true, {}, buttonCommon, {
              extend: "pdfHtml5"
            })
          ]
        });

        console.log("datatableRef", datatableRef);
        //this.setState({ datatableRef });
      }); // end of document ready
    })(jQuery); // end of jQuery name space
  }

  editSalesReport = e => {
    console.log(e.value);
    this.props.load.editSalesReportPopulate(e.value);
  };

  render() {
    const { handleSubmit, pcontrolVal, productList, cancelSale } = this.props;

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
                            <option key={prod._id} value={prod._id}>
                              {prod.name}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
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
