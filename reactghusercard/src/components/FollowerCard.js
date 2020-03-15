import React from 'react';

const FollowerCard = props => {
    console.log('props in followercard',props)
    return (
        <div onClick={props.setSearchUser}>
            
            <img className='followImg' alt='follower' src={props.pic} />
            <h3 className='followerLogin'>{props.login}</h3>
            <a className='followerLink' href={props.html_url} >{props.html_url}</a>

        </div>
    )
}

export default FollowerCard;