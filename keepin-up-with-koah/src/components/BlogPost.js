import React, { useState, useEffect } from 'react';
import {Route, Link} from 'react-router-dom'
import '../stylesheets/blogPosts.scss'
import axios from 'axios'

function BlogPost(props) {
    const [blogPost, setBlogPost] = useState([])
    console.log(props)

    useEffect(() => {
        /* 
        Router passes in a prop called match into every route that is rendered. 
        Inside this match object is another object called params. 
        This holds all matching params where the key is the name we specified when 
        creating the route and the value is the actual value in the URL.
        */
        const { match: { params } } = props;

        axios
        .get(`http://localhost:4500/api/post/${params.id}`)
        .then(res => {
            setBlogPost(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const date = new Date(blogPost.createdAt).toDateString().split(' ').slice(1).join(' ')


    return(
        <div>  
            {!localStorage.getItem('loggedIn') && <Link to={'/'}>Home</Link>}
            <h1>{blogPost.title}</h1>
            <h3>{date}</h3>
            <h3>{blogPost.category}</h3>
            <p>{blogPost.body}</p>
        </div>
    )
}

export default BlogPost;