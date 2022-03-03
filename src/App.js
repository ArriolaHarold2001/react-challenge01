import React, { Component } from "react";
import Search from "./components/Search";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <>
        <Search />
      </>
    );
  }
}

export default App;
