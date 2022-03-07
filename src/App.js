import React, { Component } from "react";
import BasicInfo from "./components/BasicInfo";
import Data from "./data/basicData.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data,
      query: "",
    };
  }
  render() {
    return (
      <div className="App">
        <BasicInfo data={this.state} />
      </div>
    );
  }
}

export default App;
