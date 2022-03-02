import React, { Component } from "react";
import BasicInfo from "./components/BasicInfo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <>
        <BasicInfo />
      </>
    );
  }
}

export default App;
