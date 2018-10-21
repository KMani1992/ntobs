import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

class Signup extends Component {
  constructor(props) {
    super(props);  
  }

  componentDidUpdate(prevProps) {
    const { common, reset } = this.props;

    if (prevProps.common.done !== common.done && common.done) {      
      reset();
    }
  }

  render() {
    const { handleSubmit, operatorList, editOperator, reset } = this.props;

    return (
      <main>
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row">
              <h5 className="center-align orange-text">Sign Up</h5>
            </div>
            <div className="row">
              <form onSubmit={handleSubmit} className="col s12">
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
                      name="userName"
                      id="name"
                      component="input"
                      type="text"
                      className="validate"
                    />
                    <label for="name">User Name</label>
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
                  <div className="input-field col s12 m6">
                    <button
                      className="btn waves-effect waves-light orange"
                      type="submit"
                      name="action"
                    >
                      Submit
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
      </main>
    );
  }
}

const SignupInit = reduxForm({
  form: "signup",
  enableReinitialize: true
})(Signup);

const mapStateToProps = state => ({
  initialValues: state.operator.default,
  common: state.common
});

export default connect(mapStateToProps, null)(SignupInit);
