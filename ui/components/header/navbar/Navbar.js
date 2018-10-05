import React, { Component } from 'react';
import $ from 'jquery';

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
                <div className="nav-wrapper container"><a id="logo-container" title="non tag based online billing system" href="#" className="brand-logo">NTOBS</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#">Navbar Link</a></li>
                    </ul>

                    <ul id="nav-mobile" className="sidenav">
                        <li><a href="#">Navbar Link</a></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
            </nav>
        );
            
        
    }
}