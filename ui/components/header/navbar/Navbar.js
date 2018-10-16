import React, { Component } from "react";
import $ from "jquery";
import { Link, Redirect } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logout: false
    };

    (function($) {
      $(function() {
        $(".sidenav").sidenav();
      }); // end of document ready
    })(jQuery); // end of jQuery name space
  }

  logout = () => {
    window.sessionStorage.removeItem("ntobs-login");
    this.setState({ logout: true });
  };

  render() {
    let menus = null;
    const sessionUser = JSON.parse(
      window.sessionStorage.getItem("ntobs-login")
    );
    //console.log("sessionUser", sessionUser);
    if (sessionUser) {
      menus = (
        <div>
          <ul className="right hide-on-med-and-down">
            <li>Welcome {sessionUser.operator.name}</li>
            <li>
              <Link
                className="btn waves-effect waves-light"
                onClick={this.logout}
                to="/"
              >
                Log Out
              </Link>
            </li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li>Welcome {sessionUser.operator.name}</li>
            <li>
              <Link onClick={this.logout} to="/">
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      );
    } else {
      menus = (
        <div>
          <ul className="right hide-on-med-and-down">
            <li>
              {window.location.pathname === "/login" ? (
                <Link to="/company">Create Company</Link>
              ) : (
                <Link to="/login">Log In</Link>
              )}
            </li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li>
              {window.location.pathname === "/login" ? (
                <Link to="/company">Create Company</Link>
              ) : (
                <Link to="/login">Log In</Link>
              )}
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
              to="/"
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
