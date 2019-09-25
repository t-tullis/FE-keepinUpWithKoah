import React from 'react'

function Logout(props) {
    const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    // window.location.reload();
    props.history.push('/')
    }
    return(
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Logout