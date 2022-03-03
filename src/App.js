import React, { Component } from "react";
import Search from "./components/BasicInfo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Search />
      </div>
    );
  }
}

export default App;
