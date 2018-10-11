import React, { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    constructor(props){
        super(props);
        (function($){
            $(function(){
          
              $('.sidenav').sidenav();
          
            }); // end of document ready
          })(jQuery); // end of jQuery name space        
    }

    render() {
        return (            
            <nav className="light-blue lighten-1" role="navigation">
                <div className="nav-wrapper container">
                    <Link id="logo-container" title="non tag based online billing system" to="/" className="brand-logo">NTOBS</Link>
                    <ul className="right hide-on-med-and-down">                        
                        <li><Link to="/login">Log In</Link></li>
                    </ul>

                    <ul id="nav-mobile" className="sidenav">                        
                        <li><Link to="/login">Log In</Link></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
            </nav>
        );
            
        
    }
}