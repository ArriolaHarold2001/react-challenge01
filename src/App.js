import React, { Component } from "react";
import BasicInfo from "./components/BasicInfo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
