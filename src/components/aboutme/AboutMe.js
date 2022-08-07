

import React from 'react'
import './aboutme.css'

const AboutMe = () => {
  return (
    <div >
        <div className='about_wrapper' id='about'>
            <div className='about_content'>

                <div className='about_header'>
                    <h2>About Me</h2>
                    <hr/>
                </div>

                <div className='about_details'>

                    <div className='about_profile_picture'>
                        <div className='about_profile_picture_background'>

                        </div>
                    </div>
                    
                    <div className='about_details_text'>

                        <div className='main_about_top'>
                            full stack web and mobile developer with background knowledge of mern stack along with a knack for building applications with upmost efficiency and super fast delivery. an asset to any organization
                        </div>

                        <div className='main_about_bottom'>
                            <h3>here are a few of my highlights...</h3>
                            <ul>
                                <li>fullstack web and mobile applications</li>
                                <li>interactive front end</li>
                                <li>react and react native</li>
                                <li>building rest api</li>
                                <li>managing database</li>
                            </ul>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default AboutMe
