import React from 'react'
import './About.css'

import BgImg from '../../assets/GenImg1.png'
import Monalisa from '../../assets/monalisaPic.jpg'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-bg-img'>
                <img src={BgImg} alt="" />
                <h3>Who we are ?</h3>
            </div>
            <h2>Honestly, Good question.</h2>
            <div className='about-text'>
                <div className='about-text-img'>
                    <img src={Monalisa} alt="" />
                </div>
                <span>
                    <h3>
                    I am Adnan and I am a full stack developer. I mostly use the MERN stack.
                    </h3>
                    <span>
                        <a href="https://www.linkedin.com/in/adnan-haque-ah5" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/adnanknight" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="#">Portfolio (coming soon)</a>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default About