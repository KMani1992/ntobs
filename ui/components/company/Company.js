
import { Field, reduxForm } from 'redux-form';
import React from 'react'

const Company = props => {

    const { handleSubmit } = props;

    return (<main>
        <div className="section no-pad-bot">            
            <div className="container row">                                
                <form onSubmit={handleSubmit} className="col s12">
                    <div className="row no-pad-left">
                        <h5 className="left-align orange-text">Company Register</h5>
                    </div>        
                    <div className="row">
                        <div className="input-field col s12 m6">
                            <label htmlFor="domain">Domain Name</label>
                            <Field name="domain" component="input" type="text" />
                        </div>
                        <div className="input-field col s12 m6">
                            <label htmlFor="company">Company Name</label>
                            <Field name="company" component="input" type="text" />
                        </div>
                    </div>
                    

                    <div className="row">
                        <div className="input-field col s12 m6">
                            <label htmlFor="key">Activation Key</label>
                            <Field name="key" component="input" type="text" />
                            <span className="helper-text">To get Activation Key contact &nbsp;<a href="mailto:kmanikandangce@gmail.com">kmanikandangce@gmail.com</a></span>
                        </div>
                    
                        <div className="input-field col s12 m6">
                            <label htmlFor="name">Admin User Name</label>
                            <Field name="name" component="input" type="text" />
                        </div>
                    </div>


                    <div className="row">
                        <div className="input-field col s12 m6">
                            <label htmlFor="login">Login ID(eg:sample@email.com)</label>
                            <Field name="login" component="input" type="text" />
                        </div>

                        <div className="input-field col s12 m6">
                            <label htmlFor="password">Password</label>
                            <Field name="password" component="input" type="password" />
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn waves-effect waves-light orange" type="submit" name="action">
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
    </main>);

}


export default reduxForm({ form: 'company' })(Company);