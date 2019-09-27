import React, { useState, useEffect } from 'react';
import {Route, Link} from 'react-router-dom'
import '../stylesheets/blogPosts.scss'
import axios from 'axios'

function BlogPosts() {
    const [blogPosts, setBlogPosts] = useState([])
    
    useEffect(() => {
        axios
        .get('http://localhost:4500/api/posts')
        .then(res => {
            setBlogPosts(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    return(
        <div className='posts-container'>
            {blogPosts.map(post => {
                return(
                    <div className='post-card' key={post._id}> 
                        <Link to={`/post/${post._id}`}>{post.title}</Link>
                        <h5>{post.category}</h5>
                        <p>{post.body}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default BlogPosts;