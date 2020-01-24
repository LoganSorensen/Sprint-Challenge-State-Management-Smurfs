import React, { Component } from "react";
import Smurfs from './components/smurfs';
import "./App.css";
import SmurfForm from "./components/smurf-form";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <Smurfs />
      </div>
    );
  }
}

export default App;
