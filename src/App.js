import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserItems from "./components/layout/user/UserItems";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <UserItems />
      </div>
    );
  }
}

export default App;
