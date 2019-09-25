import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Homepage() {
    const [blogPosts, setBlogPosts] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:4500/api/posts')
        .then(res => {
            setBlogPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })

    return(
        <div>
            <h1>Keepin Up W/ Koah</h1>
            {blogPosts.map(post => {
                return(
                    <div> 
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Homepage;