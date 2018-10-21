import React, { Component } from "react";
//import $ from "jquery";
import { Link, Redirect, withRouter, NavLink } from "react-router-dom";
import * as util from "../../../util/util";

class Navbar extends Component {
  constructor(props) {
    super(props);

    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems);
    });

  }

  logout = () => {
    util.clearLogin();
    this.props.history.push(util.HOME);
  };

  render() {
    let menus = null;
    //console.log("sessionUser", sessionUser);
    if (util.getUserName()) {
      menus = (
        <div>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink className="waves-effect waves-light" to={util.OPERATOR}>
                Operator
              </NavLink>
            </li>
            <li>
              <NavLink className="waves-effect waves-light" to={util.PCONTROL}>
                PControl
              </NavLink>
            </li>
            <li>
              <NavLink className="waves-effect waves-light" to={util.PRODUCT}>
                Product
              </NavLink>
            </li>
            <li>
              <NavLink className="waves-effect waves-light" to={util.SALES}>
                Sales
              </NavLink>
            </li>
            <li>
              <NavLink className="waves-effect waves-light" to={util.SALES_RPT}>
                Sales Report
              </NavLink>
            </li>

            <li>Welcome {util.getUserName()}</li>
            <li>
              <a className="btn waves-effect waves-light" onClick={this.logout}>
                Log Out
              </a>
            </li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li>
              <a className="orange-text">Welcome {util.getUserName()}</a>
            </li>
            <li>
              <NavLink className="waves-effect waves-light" to={util.OPERATOR}>
                Operator
              </NavLink>
            </li>
            <li>
              <NavLink className="waves-effect waves-light" to={util.PCONTROL}>
                PControl
              </NavLink>
            </li>
            <li>
              <NavLink className="waves-effect waves-light" to={util.PRODUCT}>
                Product
              </NavLink>
            </li>
            <li>
              <NavLink className="waves-effect waves-light" to={util.SALES}>
                Sales
              </NavLink>
            </li>
            <li>
              <NavLink className="waves-effect waves-light" to={util.SALES_RPT}>
                Sales Report
              </NavLink>
            </li>
            <li>
              <a onClick={this.logout}>Log Out</a>
            </li>
          </ul>
        </div>
      );
    } else {
      menus = (
        <div>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to={util.LOGIN}>Log In</Link>
            </li>
            <li>
              <Link to={util.SIGNUP}>Sign Up</Link>
            </li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li>
              <Link to={util.LOGIN}>Log In</Link>
            </li>
            <li>
              <Link to={util.SIGNUP}>Sign Up</Link>
            </li>
          </ul>
        </div>
      );
    }

    return (
      <div>
        <nav className="light-blue lighten-1" role="navigation">
          <div className="nav-wrapper container">
            <Link
              id="logo-container"
              title="non tag based online billing system"
              to={util.HOME}
              className="brand-logo"
            >
              NTOBS
            </Link>
            {menus}
            <a href="#" data-target="nav-mobile" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);

//for backup purpose
// (function($) {
//   $(function() {
//     $(".sidenav").sidenav();
//   }); // end of document ready
// })(jQuery); // end of jQuery name space
