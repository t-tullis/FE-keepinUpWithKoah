import React, { useState } from 'react'
import axios from 'axios'
import '../stylesheets/Login.scss'

function Login(props) {
    const [loginCreds, setLoginCreds] = useState({
        creds:{
            email:  '',
            password: ''
        },
    })
    

    const handleInputChange = e => {
        e.preventDefault();
        setLoginCreds({
            creds:{
                ...loginCreds.creds, 
            [e.target.name]: e.target.value
            }
       });
    };

    const signIn = (e, creds) => {
        e.preventDefault();
        e.persist();

        console.log(loginCreds)
       
        axios
        .post(`http://localhost:4500/api/user/login`, creds)
        .then(res => {
            console.log(res)
            if(res.status === 200){
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('loggedIn', 'true' )
            props.history.push('/')
            }
        })
        .catch(err => {
        console.log(err)
        })
    }
    
    const { email, password } = loginCreds.creds
    return(
    <div className='login'>
        {console.log(loginCreds)}
        {/* {console.log(loginCreds.email)}
        {console.log(loginCreds.password)} */}
      <div class='login-bg'>
        <h1> Admin Login</h1>
        <form className='login-form' method='POST' onSubmit={e => signIn(e, loginCreds.creds)}>
          <input
            className='email'
            type='text'
            value={email}
            onChange={handleInputChange}
            name='email'
            placeholder='email'
             />

            <input
                className='password'
                type='password'
                value={password}
                onChange={handleInputChange}
                placeholder='password'
                name='password'
             />

             <button className='login-button' type="submit">Login</button>
        </form>
        </div>
    </div>
    )
}

export default Login