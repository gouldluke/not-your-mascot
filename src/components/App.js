import React, { Component } from 'react';
import '../App.css';
import Header from './Header';

const headerText = "hey friend :)"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text={headerText} />
        <p>
          Hey Taylor!!!
        </p>
      </div>
    );
  }
}

export default App;
