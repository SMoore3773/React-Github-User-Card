import React from 'react';
import UserCard from './components/UserCard';
import './App.css';

class App extends React.Component {
    state= {
      user: {},
      followers: []
    }
  
  componentDidMount() {
    fetch('https://api.github.com/users/SMoore3773')
    .then(response => response.json())
    .then(res => this.setState({user: res}))
    .catch(err => console.log('catch error in api req',err))
    
    fetch('https://api.github.com/users/SMoore3773/followers')
    .then(res => res.json())
    .then(res => this.setState({followers: res}))
    .catch(err => console.log('catch error in api followers req',err))
  }
 

    render() {
      console.log('this.state.user in app render', this.state.user)
      console.log('this.state.followers in app render', this.state.followers)
      
      
      return (
        
        <div className="App">
          <UserCard 
          user = {this.state.user}
          followers = {this.state.followers}
          />
        </div>
    );
    }
}
export default App;
