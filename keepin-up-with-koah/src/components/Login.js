import React, { useState } from 'react'
import axios from 'axios'

function Login() {
    const [loginCreds, setLoginCreds] = useState({
            email:  '',
            password: '',
        isLoggedIn: false
    })

    const handleInputChange = e => {
        setLoginCreds({ 
            [e.target.name]: e.target.value
       });
    };

    const signIn = (e) => {
        e.preventDefault();
        // e.persist();
       
        axios
        .post(`http://localhost:4500/api/user/login`,{
            email: loginCreds.email,
            password: loginCreds.password
        })
        .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        // if(res.status === 200){
        //     setTimeout(()=>{
        //        setLoginCreds({
        //             loggedIn: true
        //         })
        //     }, 2000)
        // }
        })
        .catch(err => {
        console.log(err)
        })
        
    }



    
    return(
    <div>
        {console.log(loginCreds)}
        {/* {console.log(loginCreds.email)}
        {console.log(loginCreds.password)} */}
      <h1> Login component</h1>
      <form method='POST' onSubmit={signIn}>
          <input
            type='text'
            value={loginCreds.email}
            onChange={handleInputChange}
            name='email'
            placeholder='email'
             />
            <input
                type='text'
                value={loginCreds.password}
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