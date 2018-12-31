import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                    {this.props.text}
                </a>
            </header>
        )
    }
}

export default Header;
