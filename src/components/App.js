import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Hook from './Hook';
import MoreInfo from './MoreInfo';
import {initialMyths} from '../myths';
import {additionalMyths} from '../myths';

const headerText = "Do you believe..."

class App extends Component {
    render() {
        return (
          <div className="App">
            <Header text={headerText} />
            <Hook />
            <MoreInfo />
          </div>
        );
    }

    constructor() {
        super();

        this.state = {
            myths: initialMyths
        };

        this.loadAdditionalMyths = this.loadAdditionalMyths.bind(this);
    }

    loadAdditionalMyths() {
        var currentMyths = { ...this.state.myths };
        var newMyths = Object.assign( currentMyths, additionalMyths );

        this.setState({ myths: newMyths});
    }
}

export default App;
