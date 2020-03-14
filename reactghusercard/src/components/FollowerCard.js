import React from 'react';

const FollowerCard = props => {
    console.log('props in followercard',props)
    return (
        <div>
            <h2> Followers</h2>
            <img alt='follower picture' src={props.pic} />
            <h3>{props.name}</h3>

        </div>
    )
}

export default FollowerCard;