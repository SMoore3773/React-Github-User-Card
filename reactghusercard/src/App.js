import React from 'react';
import UserCard from './components/UserCard';
import './App.css';

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
 
handleUserChange = e => {
  this.setState({...this.setState, searchUser: e.target.value})
  console.log('click')
}
    render() {
      console.log('this.state.user in app render', this.state.user)
      console.log('this.state.followers in app render', this.state.followers)
      
      
      return (
        
        <div className="App">
          <UserCard 
          user = {this.state.user}
          followers = {this.state.followers}
          setSearchUser={this.handleUserChange}
          />
        </div>
    );
    }
}
export default App;
