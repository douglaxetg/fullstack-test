import React, { Component } from 'react';
import './App.css';

//import UserDetailsComp from './components/usersDet';
import UsersList from './components/userList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <UsersList />
        </header>
      </div>
    );
  }
}

export default App;