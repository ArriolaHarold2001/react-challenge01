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
        <div className="search-section">
          <header class="main-header">
            <h1>Search by:</h1>
          </header>

          <div class="input-flex">
            <input
              placeholder="First Name"
              className="fName search"
              type="text"
              onChange={(e) => this.setState({ query: e.target.value })}
            ></input>
            <input
              placeholder="Last Name"
              className="lName search"
              type="text"
              onChange={(e) => this.setState({ query: e.target.value })}
            ></input>
            <input
              placeholder="Phone Number"
              className="mNumber search"
              type="text"
              onChange={(e) => this.setState({ query: e.target.value })}
            ></input>
            <input
              placeholder="Birthday"
              className="birthday search"
              type="text"
              onChange={(e) => this.setState({ query: e.target.value })}
            ></input>
          </div>
        </div>
        <BasicInfo data={this.state} />
      </div>
    );
  }
}

export default App;
