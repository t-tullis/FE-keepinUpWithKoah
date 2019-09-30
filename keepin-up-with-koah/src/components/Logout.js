import React from 'react'
import { Link } from 'react-router-dom'
import '../App.scss'

function Logout(props) {
    const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    // window.location.reload();
    props.history.push('/')
    }
    return(
        <div className='logOut' >
            <Link to='' onClick={logout}>Logout</Link>
        </div>
    )
}

export default Logout