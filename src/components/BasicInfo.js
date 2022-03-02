import React, { Component } from "react";
import "../App.css";

class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          id: 0,
          firstName: "Harold",
          lastName: "Arriola Nucamendi",
          mobileNumber: "404-404-4004",
          birthday: "November 4th ♏️",
        },
        {
          id: 1,
          firstName: "Carlee",
          lastName: "Barley",
          mobileNumber: "1-800-808-8008",
          birthday: "March 27th 🐈‍⬛",
        },
        {
          id: 2,
          firstName: "Milo",
          lastName: "Bambino",
          mobileNumber: "704-082-2912",
          birthday: "November 5th 😈",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
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
