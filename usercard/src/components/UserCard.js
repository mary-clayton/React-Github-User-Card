import React from "react"
import styled from 'styled-components'

const UserStyle = styled.div `
margin: 5% 0 0 5%;
width: 150%;
background: #505050;
color: white;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
padding: 5%;
img {
    width:100%;
    padding: 5%;
}
a {
    color: white;
}
`
const FollowerStyle = styled.div `
width: 271px;
height: 291px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin-bottom:5%;
img {
    width: 50%;
}
`
const CardsStyle = styled.div `
display:flex;
`
const FollowCardStyle = styled.div `
display: flex;
flex-flow: wrap;
margin: 5%;
a {
    text-decoration: none;
    color: white;
    background: #505050;
    padding: 3%;
}
`


export const UserCard = (props) => {
    const users = props.user
    const followers = props.follower
    // console.log(followers);
    return (
        <CardsStyle className="cards">
        <UserStyle className="usercard">
<img src={users.avatar_url} alt="mary's profile"/>
<h1>{users.name}</h1>
<h2>{users.login}</h2>
<h3>Location: {users.location}</h3>
<h3><a href={users.html_url}>View Profile</a></h3>
<h3>Followers: {users.followers}</h3>
<h3>Following: {users.following}</h3>
<h3>bio: {users.bio}</h3>
</UserStyle>
<FollowCardStyle className="followercards">
{followers.map((follower)=> (
<FollowerStyle>
<img src={follower.avatar_url} alt="profile"/>
<h1>{follower.name}</h1>
<h2>{follower.login}</h2>
<h3><a href={follower.html_url}>View Profile</a></h3>
</FollowerStyle>
)
)}
        </FollowCardStyle>
        </CardsStyle>
    )
}