import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import User from "./components/user/Users";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <User />
        </div>
      </div>
    );
  }
}

export default App;
