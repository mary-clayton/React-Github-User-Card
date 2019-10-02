import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {UserCard} from './components/UserCard'


class App extends Component {
  constructor(){
    super();
  this.state = {
    usercard: [],
    followers: [],
    users: []
  };
} //constructor
  componentDidMount() {
    axios
    .get('https://api.github.com/users/mary-clayton')
    .then(res => {
      // console.log(res.data);
      this.setState({
        usercard: res.data
      })
    })
    .catch(err => console.log(err));

      axios
      .get(`https://api.github.com/users/mary-clayton/followers`)
      .then(res => {
        // console.log(res.data)
          this.setState({
              followers: res.data
          })
      })
       .catch(err => console.log("404", err));
    
  }

  

  render () {
  return (
    <div className="App">
      <UserCard user={this.state.usercard} follower={this.state.followers}/>
    </div>
  );
}
}
export default App;
