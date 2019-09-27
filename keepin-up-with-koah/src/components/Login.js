import React, { useState } from 'react'
import axios from 'axios'

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
            props.history.push('/Users')
            }
        })
        .catch(err => {
        console.log(err)
        })
    }
    
    const { email, password } = loginCreds.creds
    return(
    <div>
        {console.log(loginCreds)}
        {/* {console.log(loginCreds.email)}
        {console.log(loginCreds.password)} */}
      <h1> Login component</h1>
      <form method='POST' onSubmit={e => signIn(e, loginCreds.creds)}>
          <input
            type='text'
            value={email}
            onChange={handleInputChange}
            name='email'
            placeholder='email'
             />
            <input
                type='text'
                value={password}
                onChange={handleInputChange}
                placeholder='password'
                name='password'
             />
             <button type="submit">Login</button>
        </form>
    </div>
    )
}

export default Login