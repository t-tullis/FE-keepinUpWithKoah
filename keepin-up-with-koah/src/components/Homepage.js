import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import BlogPosts from './BlogPosts.js'
import Koah from '../images/keepinUp.jpg'
import Koah1 from '../images/KoahBlur.jpg'
import '../stylesheets/homepage.scss'

function Homepage() {
    return(
        <div>
            <header className='koah-header'>
                <img className='koah-pic' src={Koah1} />
                <h1>Koah.</h1>
                <p>HI - I’M <span className='name'>KOAH</span> KEEP UP WITH MY LIFE.</p>
            </header>
                <Route
                    render = {props => <BlogPosts {...props} /> }
                />
        </div>
    )
}

export default Homepage;