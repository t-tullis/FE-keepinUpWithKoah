import React, { useState, useEffect } from 'react';
import {Route, Link} from 'react-router-dom'
import EllipsisText from "react-ellipsis-text"
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

    const date = new Date(blogPosts.createdAt).toDateString().split(' ').slice(1).join(' ')
    
    return(
        <div className='posts-container'>
            <h1>Keepin Up With Koah</h1>
            {blogPosts.map(post => {
                return(
                    <div className='post-card' key={post._id}> 
                        <h5 className='post-date'>{new Date(post.createdAt).toDateString().split(' ').slice(1).join(' ')}</h5>
                        <img className='preview-img' src={post.previewImg} />
                        <Link  className= 'post-link' to={`/post/${post._id}`}>{post.title}</Link>
                        <h5>{post.category}</h5>
                        <EllipsisText className='preview-text' text={post.body} length={200} />
                        <Link className='read-more' to={`/post/${post._id}`}>Read more...</Link>
                    </div>
                )
            })}

        </div>
    )
}

export default BlogPosts;