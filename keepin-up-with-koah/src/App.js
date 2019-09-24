import React from 'react';
import Login from './components/Login.js'
import Users from './components/Users.js'
import CreatePost from './components/CreatePost.js'
import './App.css';

function App() {
  return (
    <div className="App">
     <h2>Keepin up w/ Koah</h2>
     <Login />
     <CreatePost />
    </div>
  );
}

export default App;
