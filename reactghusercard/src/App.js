import React from 'react';
import UserCard from './components/UserCard';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      user: {}
    }
  }
  componentDidMount() {
    fetch('https://api.github.com/users/SMoore3773')
    .then(response => {
      console.log(response.json())
      response.json()})
    .then(response => {this.setState({user: response});
  console.log(this.response)})
    .catch(err => console.log('catch error in api req',err))
  }


    render() {
      
      
      return (
        
        <div className="App">
          <p>app</p>
        </div>
    );
    }
}
export default App;
