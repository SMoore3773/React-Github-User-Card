import React from 'react';
import UserCard from './components/UserCard';
import styled from 'styled-components';

//styling for app background 
const Application = styled.div`
background: rgb(131,58,180);
background: linear-gradient(15deg, rgba(131,58,180,1) 0%, rgba(29,210,253,1) 36%, rgba(252,176,69,1) 100%);
`

class App extends React.Component {
    //setup initial state
    state= {
      searchUser:'SMoore3773',
      user: {},
      followers: []
    }
   componentDidMount() {

    //api request for initial user
    fetch(`https://api.github.com/users/${this.state.searchUser}`)
    .then(response => response.json())
    .then(res => this.setState({user: res}))
    .catch(err => console.log('catch error in api req',err))

    //api request for initial user's followers
    fetch(`https://api.github.com/users/${this.state.searchUser}/followers`)
    .then(res => res.json())
    .then(res => this.setState({followers: res}))
    .catch(err => console.log('catch error in api followers req',err))
  }

 componentDidUpdate(){
    //dependency for CDU to prevent infinite loop
     if(this.state.searchUser !== this.state.user.login){

    //fetch for updated search user
     fetch(`https://api.github.com/users/${this.state.searchUser}`)
     .then(response => response.json())
     .then(res => this.setState({user: res}))
     .catch(err => console.log('catch error in api req',err))

     //fetch for updated search user's followers
     fetch(`https://api.github.com/users/${this.state.searchUser}/followers`)
     .then(res => res.json())
     .then(res => this.setState({followers: res}))
     .catch(err => console.log('catch error in api followers req',err))
    }
 }
 
//change handle function for setting new user---> used in onClick in FollowerCard
handleUserChange = user => {
  this.setState({...this.state, searchUser : user})
  console.log('app.js: user in handleuserchange',user)
}
    render() {

      // Console logs for tracking state information
      console.log('App.js: render: this.state.user', this.state.user)
      console.log('App.js: render: this.state.followers', this.state.followers)
      console.log('App.js: render: this.state.searchuser', this.state.searchUser)
      
      return (
        
        <Application className="App">
          <UserCard 
          user = {this.state.user}
          followers = {this.state.followers}
          setSearchUser={user => this.handleUserChange(user)}
          />
         
        </Application>
    );
    }
}
export default App;
