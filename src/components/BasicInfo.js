import React, { Component } from "react";
import Search from "./Search";
import "../App.css";

class BasicInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Search />
        <div className="pii">
          {/* <div className="pii-hardcoded">
        <h1>Name:</h1>
        <p>Harold</p>
        <h1>Number:</h1>
        <p>404-404-4004</p>
        <h1>Birthday</h1>
        <p>November 4th ♏️</p>
      </div> */}
          <ul className="pii-items">
            {this.state.person.map((value) => (
              <li key={value.id}>
                {value.firstName} {value.lastName} || {value.mobileNumber} ||{" "}
                {value.birthday}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default BasicInfo;
