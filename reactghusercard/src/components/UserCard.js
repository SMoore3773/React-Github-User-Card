import React from 'react';
import FollowerCard from './FollowerCard';

const UserCard = props => {
console.log('usercard props',props)
    return(
        <div className='userContainer'>
            <div className='userCard'>
                <h1 className='userHeader'>{props.user.name}</h1>
                <img className='userImg' alt='user' src={props.user.avatar_url}/>
                <p className='userBio'>{props.user.bio}</p>
                <p className='userHandle'>GitHub Handle: {props.user.login}</p>
                <a className='userLink' href={props.user.html_url}>{props.user.html_url}</a>
                <a className='userRepo' href={props.user.repo_html}>Public Repo's: {props.user.public_repos}</a>
            </div>
            <div className='followerContainer'>
                <h3 className='userFollwerHeader'>Followers</h3>
                <div className='followerCards'>
                    {props.followers.map(fol => <FollowerCard setSearchUser={props.setSearchUser}  key={fol.id} login={fol.login} pic={fol.avatar_url} html_url={fol.html_url} />)}
                </div>
            </div>
        </div>
    )
}

export default UserCard; 