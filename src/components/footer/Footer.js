

import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='footer_wrapper'>

        <div className='footer_services'>
            <h3>Services</h3>
            <ul>
                <li>frontend web design</li>
                <li>graphics design</li>
                <li>node js backend </li>
                <li>website management</li>
                <li>content creation</li>
            </ul>
        </div>

        <div className='footer_services'>
            <h3>skills</h3>
            <ul>
                <li>html</li>
                <li>css</li>
                <li>javascript</li>
                <li>React</li>
                <li>Wordpress</li>
            </ul>
        </div>

        <div className='footer_services'>
            <h3>forums</h3>
            <ul>
                <li>whatsapp group</li>
                <li>website blog</li>
                <li>facebook group</li>
                <a href='#projects'>my projects</a>
               
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
