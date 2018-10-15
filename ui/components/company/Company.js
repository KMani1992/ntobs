import { Field, reduxForm } from "redux-form";
import React from "react";


const Company = props => {
  const { handleSubmit} = props;  

  return (
    <main>
      <div className="section no-pad-bot">
        <div className="container row">
          <form onSubmit={handleSubmit} className="col s12">
            <div className="row no-pad-left">
              <h5 className="left-align orange-text">Company Register</h5>
            </div>
            <div className="row">
              <div className="input-field col s12 m6">
                <Field
                  name="domain"
                  id="domain"
                  component="input"
                  type="text"
                  className="validate"
                />
                <label for="domain">Domain Name</label>
              </div>
              <div className="input-field col s12 m6">
                <Field
                  name="company"
                  id="company"
                  component="input"
                  type="text"
                  className="validate"
                />
                <label for="company">Company Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m6">
                <Field
                  name="key"
                  id="key"
                  component="input"
                  type="text"
                  className="validate"
                />
                <label for="key">Activation Key</label>
                <span className="helper-text">
                  To get Activation Key contact &nbsp;<a href="mailto:kmanikandangce@gmail.com">
                    kmanikandangce@gmail.com
                  </a>
                </span>
              </div>

              <div className="input-field col s12 m6">
                <Field
                  name="userName"
                  id="name"
                  component="input"
                  type="text"
                  className="validate"
                />
                <label for="name">Admin User Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m6">
                <Field
                  name="login"
                  id="login"
                  component="input"
                  type="email"
                  className="validate"
                />
                <label for="login">Login ID (eg:sample@email.com)</label>
              </div>

              <div className="input-field col s12 m6">
                <Field
                  name="password"
                  id="password"
                  component="input"
                  type="password"
                  className="validate"
                />
                <label for="password">Password</label>
              </div>
            </div>
            <div className="row">
              <button
                className="btn waves-effect waves-light orange"
                type="submit"
                name="action"
              >
                Create Company
                <i className="material-icons right">send</i>
              </button>
            </div>
            <br />
            <br />
            <br />
            <br />
          </form>
        </div>
      </div>
    </main>
  );
};

export default reduxForm({ form: "company" })(Company);
