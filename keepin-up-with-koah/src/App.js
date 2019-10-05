import React, {useState} from 'react';
import Login from './components/Login.js'
import CreatePost from './components/CreatePost.js'
import {Route, NavLink} from 'react-router-dom'
import './App.scss';
import Users from './components/Users.js'
import Logout from './components/Logout.js'
import Homepage from './components/Homepage.js'
import BlogPost from './components/BlogPost.js'

function App() {
  
  const [isToggleOpen, setIsToggleOpen] = useState(true)

  const toggleMenu = (e) => {
    e.preventDefault();
    if(!isToggleOpen){
      setIsToggleOpen(true)
    } else {
        setIsToggleOpen(false)
    }
}
  
  if(localStorage.getItem('loggedIn') === 'true'){  
    return (
    <div className="App">
     <div className='navigation-container'>
      <i onClick={toggleMenu} className="fas fa-door-open fa-2x"></i>
       <nav className={isToggleOpen ? "navigation" : "removeNav" }>
         <i onClick={toggleMenu} className="fas fa-door-closed fa-2x"></i>
         <NavLink exact to='/Createpost'>Create Post</NavLink>
         <NavLink exact to='/'>View All Posts</NavLink>
         <Route
            render = {props => <Logout {...props} /> }
          />
          <div className='social-media'>
          <p>Follow Koah's Journey</p>
          <a className='insta-link' target="_blank" href='https://www.instagram.com/keepinupwithkoah/'><i className="fab fa-instagram fa-2x"></i></a>
          </div>
        </nav>
      </div>

    <Route
      exact 
      path='/CreatePost'
      render = {props => <CreatePost {...props} />}
      />

      <Route 
        exact
        path='/'
        render = {props => <Homepage {...props} /> }
      />

      <Route
        exact 
        path='/post/:id'
        render = {props => <BlogPost {...props} />}
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
