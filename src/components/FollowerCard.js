import React from 'react';
import styled from 'styled-components';


const FollowerCard = props => {

    //console log tracking props in FollowerCard
    console.log('FollowerCard: props',props)

    return (
        <FollowerBox onClick={() => props.setSearchUser(props.login)}>
            
            <FollowerImg className='followImg' alt='follower' src={props.pic} />
            <FollowerHeader className='followerLogin'>{props.login}</FollowerHeader>
            <FollowerLilnk className='followerLink' href={props.html_url} >{props.html_url}</FollowerLilnk>

        </FollowerBox>
    )
}

//styling for FollowerCard using styled Components

const FollowerBox = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
box-sizing:border-box;
border-radius: 1rem;
padding: 1.5rem;
box-shadow: .25rem .25rem .5rem #0D4956;
margin: 1.5rem;
border: solid 1.5px #1CD2FC;
&:hover{
    border: solid 1.5px #fcaf46;
    box-shadow: .25rem .25rem .5rem #fcaf46;
}
`
const FollowerImg = styled.img`
width: 225px;
margin:1rem;
border-radius: .25rem;
box-shadow:.2rem .2rem .5rem black;
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
export default FollowerCard;