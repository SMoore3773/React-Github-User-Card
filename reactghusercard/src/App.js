import React from 'react';
import UserCard from './components/UserCard';
import styled from 'styled-components';


const Application = styled.div`
background: rgb(131,58,180);
background: linear-gradient(15deg, rgba(131,58,180,1) 0%, rgba(29,210,253,1) 36%, rgba(252,176,69,1) 100%);
`

class App extends React.Component {
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
     if(this.state.searchUser !== this.state.user.login){
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
 }
handleUserChange = user => {
  this.setState({...this.state, searchUser : user})
  console.log('app.js: user in handleuserchange',user)
}
    render() {
      console.log('this.state.user in app render', this.state.user)
      console.log('this.state.followers in app render', this.state.followers)
      console.log('this.state.searchuser in app render', this.state.searchUser)
      
      
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
