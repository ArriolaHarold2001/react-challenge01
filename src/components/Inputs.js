import React, { Component } from "react";
import Data from "../data/basicData.json";
import BasicInfo from "./BasicInfo";
import "../App.css";

class Inputs extends Component {
  constructor(props) {
    super();

    this.state = {
      Data,
      query: "",
    };
  }
  render() {
    return (
      <>
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
          <BasicInfo data={this.state.Data} query={this.state.query} />
        </div>
      </>
    );
  }
}

export default Inputs;
