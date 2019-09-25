import React, {useState, useEffect} from 'react'
import Logout from './Logout.js'
import axios from 'axios'

function Users(props) {
    const [users, setUsers] = useState({
        data: []
    })

    useEffect(() => {
        axios
        .get('http://localhost:4500/api/users', {
            headers: {
                Authorization: localStorage.getItem("token")
                }
        })
        .then(res => {
            console.log(res.data)
            setUsers({data: res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            {users.data.map(user => {
                return(
                    <div key={user._id}>
                        {console.log(user)}
                        <p>
                            {user.email}
                        </p>
                        <p>
                            {user.firstName}, {user.lastName}
                        </p>
                    </div>
                )
            })}
            {console.log(users)}
        </div>
    )
}

export default Users