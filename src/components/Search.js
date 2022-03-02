import React, { Component } from "react";

class Search extends Com {
  cosnstructor(props) {
    super(props);
    this.state = {
      person: {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        mobileNumber: this.mobileNumber,
        birthday: this.birthday,
      },
    };
  }
  render() {
    return (
      <>
        <input className="fName" type="text"></input>
        <input className="lName" type="text"></input>
        <input className="mNumber" type="text"></input>
        <input className="birthday" type="text"></input>
      </>
    );
  }
}
