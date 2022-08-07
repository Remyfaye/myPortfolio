    
import React, { useState } from 'react'
import './home.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Projects from '../resume/Projects'

export default function Home() {
    const[projects, setProjects] = useState(false)
  return (
   
      <div className='home_container' id='home'>
        <div className='home_wrapper'>
            <div className='home_content'>

                <div className='home_top'>

                    <div className='colz'>
                        <div className='colz_icons'>

                        <a href='https://www.facebook.com/favourmeme.meme'>
                            <i class="uil uil-facebook"></i>
                        </a><br/>
                        <a href='https://wa.link/qapar4'>
                            <i class="uil uil-whatsapp"></i>
                        </a><br/>
                        <a href='#'>
                            <i class="uil uil-github"></i> 
                        </a>
                        {/* <a href='#'>
                            <i className='fa fa-facebook-square'></i>
                        </a> */} 

                        </div>
                    </div>

                    <div className='profile_picture'>
                        <div className='profile_picture_background'>

                        </div>
                    </div>
                </div>

                
                <div className='home_details'>

                    <h3 className='details_header'>
                        {''}
                        Hi, i'm <span className='highlighted_text'>Fay</span>
                    </h3>

                    <div className='home_details_role'>

                        <span className='alternating_role'>
                            {/* {''}
                            <h1>
                                {''}
                                <Typical 
                                loop={Infinity} 
                                steps={[
                                    "full stack developer ", 1000,
                                    "Mern Stack Dev", 1000,
                                    "React/React Native Dev",1000,
                                    "UI/UX",1000,
                                    "Graphic Designer",1000,
                                ]}/>
                            </h1> */}

                        </span>

                        <span className='static_role'>
                                A proffesional web and mobile app web developer with high level experience in web design and development knowledge, producing quality work at lightening speed. 
                            </span>

                    </div>  

                    <div className='home_details_btn'>
                        <a href='#contact' className='home_btn' style={{textDecoration:'none'}}>
                            {""}
                            Hire Me{""}
                        </a>
                        <a href='#resume' >
                            <button className='home_btn ' onClick={() => setProjects(true)}>Resume</button>
                            <div style={{display:"none"}}>
                                {projects && <Projects/>}
                            </div>
                        </a>
                    </div>                

                </div>

               

            </div>
        </div>
      
    </div>
    
  )
}
