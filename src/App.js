import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import User from "./components/user/Users";
import axios from "axios";
import Search from "./components/user/Search";
import Alert from "./components/layout/Alert";
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${"dd3f8df5a995af1ff36b"}&client_secret=${"127650d7358b381a217e7ec117b28e1772bad25d"}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }
  //Search GitHub users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${"dd3f8df5a995af1ff36b"}&client_secret=${"127650d7358b381a217e7ec117b28e1772bad25d"}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 3000);
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <User loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
