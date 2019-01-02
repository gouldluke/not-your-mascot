import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Myth from './Myth';
import {initialMyths} from '../myths';
import {additionalMyths} from '../myths';

const headerText = "Do you believe..."

class App extends Component {
    render() {
        return (
          <div className="App">
            <Header text={headerText} />
            <p className="App-intro">any of the following statements?</p>
            <div className="myths">
                {
                    Object
                        .keys(this.state.myths)
                        .map(key => <Myth key={key} meta={this.state.myths[key]} />)
                }
            </div>
            <div className="add-myths">
                <button onClick={this.loadAdditionalMyths}> Load more...</button>
            </div>
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
