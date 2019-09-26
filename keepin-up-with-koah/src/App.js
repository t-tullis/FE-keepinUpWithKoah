import React from 'react';
import Login from './components/Login.js'
import CreatePost from './components/CreatePost.js'
import {Route, NavLink} from 'react-router-dom'
import './App.css';
import Users from './components/Users.js'
import Logout from './components/Logout.js'
import Homepage from './components/Homepage.js'
import BlogPost from './components/BlogPost.js'

function App() {
  if(localStorage.getItem('loggedIn') === 'true'){
  return (
    <div className="App">
     <div className='navigation'>
       <nav>
         <NavLink exact to='/Users'>Users</NavLink>
         <NavLink exact to='/Createpost'>Create Post</NavLink>
         <NavLink exact to='/'>Home</NavLink>
         <Route
            render = {props => <Logout {...props} /> }
            />
        </nav>
      </div>

    <Route
      exact 
      path='/CreatePost'
      render = {props => <CreatePost {...props} />}
      />

      <Route
        exact 
        path='/Users'
        render = {props => <Users {...props} />}
      />

      <Route 
        exact
        path='/'
        render = {props => <Homepage {...props} /> }
      />


    </div>
  );
}else{
  return(
    <>
    <Route 
      exact
      path='/'
      render = {props => <Homepage {...props}/> }
      />
    
   {/* Dynamic param route to get blog post by id */}
    <Route
      exact 
      path='/post/:id'
      render = {props => <BlogPost {...props} />}
    />

    <Route
    exact 
    path='/admin'
    render = {props => <Login {...props} />}
    />
    </>
  )
}
}

export default App;
