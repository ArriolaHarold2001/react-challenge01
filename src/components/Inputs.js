import React, { Component } from "react";
import BasicInfo from "./components/BasicInfo";
import Data from "./data/basicData.json";
import "./App.css";

class Inputs extends ({ Component }) {
  constructor(props) {
    super();
    this.state = {
      Data,
      query: "",
    };
  }
  render() {
    return <></>;
  }
}

export default Inputs;
