import React from 'react';
import FollowerCard from './FollowerCard';
import styled from 'styled-components';

const UserCard = props => {
    
//console.log tracking incoming props into UserCard
console.log('UserCard: props',props)
    
return(
        <UserContainer className='userContainer'>
            <UserBox  className='userCard'>
                <UserHeader className='userHeader'>{props.user.name}</UserHeader>
                <UserInfo>
                    <UserImg className='userImg' alt='user' src={props.user.avatar_url}/>
                    <UserText>
                        <UserBio className='userBio'>{props.user.bio}</UserBio>
                        <UserHandle className='userHandle'>GitHub Handle: {props.user.login}</UserHandle>
                        <UserLink  className='userLink' href={props.user.html_url}>{props.user.html_url}</UserLink>
                        <UserRepos className='userRepo'>Public Repo's: {props.user.public_repos}</UserRepos>
                    </UserText>
                </UserInfo>
            </UserBox>
            <FollowersBox className='followerContainer'>
                <FollowerHeader className='userFollwerHeader'>Followers</FollowerHeader>
                <FollowerCards className='followerCards'>
                    {props.followers.map(fol => 
                    <FollowerCard
                     setSearchUser={user => props.setSearchUser(user)}  
                     key={fol.id} 
                     login={fol.login} 
                     pic={fol.avatar_url} 
                     html_url={fol.html_url} 
                     />)}
                </FollowerCards>
            </FollowersBox>
        </UserContainer>
    )
}

//styling definitions with styled components

const UserContainer = styled.div`
display: flex;
flex-direction: column;
`
const UserBox = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin: 2rem;
border-radius: 2rem;
box-shadow: .5rem .5rem 1rem black;
background-color: white;
`
const UserHeader = styled.h1`
text-align: center;
font-size: 5rem;
color: rgba(29,210,253,1);
background: rgb(73,50,19);
background: linear-gradient(0deg, rgba(73,50,19,1) 0%, rgba(252,176,69,1) 5%);
text-shadow: .2rem .2rem .5rem #251133;
padding:2rem;
margin-top: 0rem;
border-top-left-radius: 2rem;
border-top-right-radius:2rem;
`
const UserImg = styled.img`
margin: 1rem;
width:35%;
border-radius:.5rem;
box-shadow:.2rem .2rem .5rem black;
`
const UserInfo = styled.div`
display:flex;
flex-direction:row;
justify-content: space-evenly;
padding:2rem;
margin:1rem;
align-content: center;
`
const UserText = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
font-size: 1.25rem;
width: 35%;
`
const UserBio = styled.p`
margin: 1rem;
font-size: 1.25rem;
`
const UserHandle = styled.p`
margin: 1rem;
font-size: 1rem;
`
const UserLink = styled.a`
margin: 1rem;
font-size: 1rem;
text-decoration:none;
color:black;
&:hover{
    text-decoration:underline;
}
&:visited{
    color:black;
}
`
const UserRepos = styled.p`
margin: 1rem;
font-size: 1rem;
`
const FollowersBox = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin: 2rem 4rem 2rem 4rem;
border-radius: 2rem;
box-shadow: .5rem .5rem 1rem black;
background-color: white;
`
const FollowerHeader = styled.h2`
text-align: center;
font-size:3.5rem;
color: #fcaf46;
background: rgba(29,210,253,1);
background: linear-gradient(0deg, rgba(14,84,99,1)0%, rgba(29,210,253,1) 5%);
text-shadow: .2rem .2rem .5rem #251133;
padding:2rem;
margin-top: 0rem;
border-top-left-radius: 2rem;
border-top-right-radius:2rem;
`
const FollowerCards = styled.div`
display: flex;
flex-direction:row;
flex-wrap:wrap;
justify-content: space-evenly;
padding:2rem;
margin:1rem;
`
export default UserCard; 