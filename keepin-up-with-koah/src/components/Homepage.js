import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import BlogPosts from './BlogPosts.js'
import Koah from '../images/keepinUp.jpg'
import '../stylesheets/homepage.scss'

function Homepage() {
    return(
        <div>
            <header className='koah-header'>
                <img className='koah-pic' src={Koah} />
                <h1>Keepin Up W/ Koah</h1>
            </header>
                <Route
                    render = {props => <BlogPosts {...props} /> }
                />
        </div>
    )
}

export default Homepage;