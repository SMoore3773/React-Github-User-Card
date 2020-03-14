import React from 'react';
import FollowerCard from './FollowerCard';

const UserCard = props => {
console.log('usercard props',props)
    return(
        <div>
            <h1>{props.user.name}</h1>
            {props.followers.map(fol => <FollowerCard name={fol.login} pic={fol.avatar_url} />)}
        </div>
    )
}

export default UserCard;