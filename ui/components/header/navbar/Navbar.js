import React, { Component } from "react";
import $ from "jquery";
import { Link, Redirect, withRouter } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);

    (function($) {
      $(function() {
        $(".sidenav").sidenav();
      }); // end of document ready
    })(jQuery); // end of jQuery name space
  }

  componentDidUpdate(prevProps) {
    
    if(this.props!==prevProps){
      (function($) {
      $(function() {
        $(".dropdown-trigger").dropdown();
      }); // end of document ready
    })(jQuery); // end of jQuery name space
    }


  }

  logout = () => {
    window.sessionStorage.removeItem("ntobs-login");
    this.props.history.push("/");
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
          <ul id="dropdown1" class="dropdown-content">
            <li>
              <a href="#!">one</a>
            </li>
            <li>
              <a href="#!">two</a>
            </li>
            <li class="divider" />
            <li>
              <a href="#!">three</a>
            </li>
            <li>
              <a href="#!">
                <i class="material-icons">view_module</i>four
              </a>
            </li>
            <li>
              <a href="#!">
                <i class="material-icons">cloud</i>five
              </a>
            </li>
          </ul>

          <ul className="right hide-on-med-and-down">
            <li>
              <a class="dropdown-trigger btn" href="#" data-target="dropdown1">
                Drop Me!
              </a>
            </li>
            <li>Welcome {sessionUser.operator.name}</li>
            <li>
              <a className="btn waves-effect waves-light" onClick={this.logout}>
                Log Out
              </a>
            </li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li>Welcome {sessionUser.operator.name}</li>
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
              <Link to="/login">Log In</Link>              
            </li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li>
              <Link to="/login">Log In</Link>              
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

export default withRouter(Navbar);
/*
{window.location.pathname === "/login" ? (
                <Link to="/company">Create Company</Link>
              ) : (
                <Link to="/login">Log In</Link>
              )}
              {"msg":"Login Success","operator":{"type":"admin","authType":"local","status":"active","_id":"5bc40375a7718c260749a0f7","name":"admin user","loginId":"new@email.com","password":"sha1$31aebf5c$1$ffd24c350c165e54e2d0e248f051285a9b9ebc34","domain":"new","created":"2018-10-15T03:03:17.871Z","updated":"2018-10-15T03:03:17.871Z","__v":0}}
*/