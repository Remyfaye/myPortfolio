

import React from 'react'

const Projects = () => {
   
  return (
    <div className='projects' id='projects'>
       <div className='details_list_item'>
              < div className='details_info'>
                  <h3>School Website</h3>
                  <span>front end design of a School web app</span>
              </div>
              <div className='resume_btn'> <a href='https://remyfaye.github.io/school-website/'>view</a> </div>
       </div>

        <div className='details_list_item'>

            < div className='details_info'>
                <h3>website blog</h3>
                <span>wordpress design of a website blog</span>
            </div>

            <div className='resume_btn'><a href='https://dev-websiteblogdev.pantheonsite.io/'>view</a> </div>

        </div> 

        <div className='details_list_item'>

            < div className='details_info'>
                <h3>Social Media Web App</h3>
                <span>frontend design of a social media web app </span>
            </div>

            <div className='resume_btn'><a href='https://remyfaye.github.io/Social-Media-Web-App/'>view</a></div>

        </div>     

        <div className='details_list_item'>

            < div className='details_info'>
                <h3>dating Website</h3>
                <span>complete mern stack dating website with login/register authentication</span>
            </div>

            <div className='resume_btn'>view</div>

        </div>

        

    </div>
  )
}

export default Projects
