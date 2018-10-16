import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class Login extends Component {

  render() {
      const {handleSubmit} = this.props;
    return (
      <main>
        <div className="section">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <h5 className="left-align orange-text">Login</h5>
              </div>
              <div className="input-field row">                
                <Field
                  name="domain"
                  id="domain"
                  component="input"
                  type="text"
                  className="validate"
                />
                <label htmlFor="domain">Domain</label>
              </div>
              <div className="input-field row">
                <Field
                  name="login"
                  id="login"
                  component="input"
                  type="email"
                  className="validate"
                />
                <label htmlFor="login">Login</label>
              </div>
              <div className="input-field row">
                <Field
                  name="password"
                  id="password"
                  component="input"
                  type="password"
                  className="validate"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field row">
                <button className="btn waves-effect waves-light orange">
                  Login<i className="material-icons right">send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default reduxForm({ form: "login" })(Login);
