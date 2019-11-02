import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {UserCard} from './components/UserCard'
import SearchUsers from './components/SearchUsers'


class App extends Component {
  constructor(){
    super();
  this.state = {
    user: 'mary-clayton',
    userData:[],
    followers: [],
    users: []
  };
} //constructor

getData = user => {
    axios
    .get(`https://api.github.com/users/${user}`)
    .then(res => {
      // console.log(res.data);
      this.setState({
        userData: res.data
      })
    })
    .catch(err => console.log(err));

      axios
      .get(`https://api.github.com/users/${user}/followers`)
      .then(res => {
        // console.log(res.data)
          this.setState({
              followers: res.data
          })
      })
       .catch(err => console.log("404", err));
    
  }
  componentDidMount() {
    this.getData(this.state.user);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.user !== prevState.user) {
      // The user whose data we are pulling up has changed.
      this.getData(this.state.user);
    }
  }

  searchUser = user => {
    this.setState({
      user: user
    })
  }
  

  render () {
  return (
    <div className="App">
      <SearchUsers searchUser={this.searchUser}/>
      <UserCard user={this.state.userData} follower={this.state.followers} searchUser={this.searchUsers}/>
    </div>
  );
}
}
export default App;
