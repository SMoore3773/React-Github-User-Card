import React from 'react';
import styled from 'styled-components';

const FollowerBox = styled.div`
display:flex;
flex-direction:column;
border-radius: 1rem;
border: solid black 1px;
padding: 1.5rem;
box-shadow: .25rem .25rem .5rem black;
margin: 1.5rem;
`
const FollowerImg = styled.img`
width: 250px;
border-radius: .25rem;
`
const FollowerHeader = styled.h3`
font-size:1.5rem;
text-align: center;
`
const FollowerLilnk = styled.a`
font-size: .75rem;
text-align: center;
color: black;
text-decoration: none;
&:hover{
    text-decoration: underline;
}
`

const FollowerCard = props => {
    console.log('props in followercard',props)
    return (
        <FollowerBox onClick={() => props.setSearchUser(props.login)}>
            
            <FollowerImg className='followImg' alt='follower' src={props.pic} />
            <FollowerHeader className='followerLogin'>{props.login}</FollowerHeader>
            <FollowerLilnk className='followerLink' href={props.html_url} >{props.html_url}</FollowerLilnk>

        </FollowerBox>
    )
}

export default FollowerCard;