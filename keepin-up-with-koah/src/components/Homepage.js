import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import BlogPosts from './BlogPosts.js'
import axios from 'axios'

function Homepage() {
    return(
        <div>
            <h1>Keepin Up W/ Koah</h1>
                <Route
                    render = {props => <BlogPosts {...props} /> }
                />
        </div>
    )
}

export default Homepage;