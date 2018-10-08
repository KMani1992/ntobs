
import { Field, reduxForm } from 'redux-form';
import React from 'react'

const Company = props => {

    const { handleSubmit } = props;

    return (<main>
        <div className="section no-pad-bot">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="domain">Domain Name</label>
                        <Field name="domain" component="input" type="text" />
                    </div>

                    <div>
                        <label htmlFor="company">Company Name</label>
                        <Field name="company" component="input" type="text" />
                    </div>

                    <div>
                        <label htmlFor="key">Activation Key (To get Activation Key contact &nbsp;<a href="mailto:kmanikandangce@gmail.com">kmanikandangce@gmail.com</a>)</label>
                        <Field name="key" component="input" type="text" />
                    </div>
                  
                    <div>
                        <label htmlFor="name">Admin User Name</label>
                        <Field name="name" component="input" type="text" />
                    </div>

                    <div>
                        <label htmlFor="login">Login ID(eg:sample@email.com)</label>
                        <Field name="login" component="input" type="text" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <Field name="password" component="input" type="password" />
                    </div>
                    <button type="submit">Create Company</button>
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