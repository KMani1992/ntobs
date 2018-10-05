import Navbar from './navbar/Navbar';
import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <Navbar />
            </header>
        );
    }
}