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
                <div className='social-media-homepage'>
                    <p>Follow Koah's Journey</p>
                    <a className='insta-link-homepage' target="_blank" href='https://www.instagram.com/keepinupwithkoah/'><i className="fab fa-instagram fa-lg"></i></a>
                </div>
                <Route
                    render = {props => <BlogPosts {...props} /> }
                />
        </div>
    )
}

export default Homepage;