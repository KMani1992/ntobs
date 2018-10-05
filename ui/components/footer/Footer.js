import React, { Component } from 'react'

import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
    <footer className="footer-copyright footer orange" >
        <div className="container">
          Developed by <a className="orange-text text-lighten-3" target="_blank" href="https://kmanikandan.herokuapp.com/">Manikandan K</a>
        </div>
      </footer>
    )
  }

}