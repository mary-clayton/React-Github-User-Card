import React, {Component} from 'react';
import axios from 'axios';
import {UserCard} from './UserCard'

const followersArray = [
    "alecblkly",
    "kmcknight1",
    "crsullivan",
    "vanessamclendon2",
    "umekow"
  ];

 class FollowersList extends Component {
    constructor() {
        super();
     this.state = {
        follower: followersArray
     }
    }
    componentDidMount(){
        this.state.follower.forEach(name => {
        axios
        .get(`https://api.github.com/users/${name}`)
        .then(res => {
            this.setState({
                followers: res.data
            })
        })
    }) //foreach
        .catch(err => console.log(err));
    }
render() {
    return (
<UserCard user={this.state.usercard}/>
    )
}
 }
 export default FollowersList;