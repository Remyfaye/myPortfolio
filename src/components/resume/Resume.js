
import React, { useState } from 'react'
import './resume.css'
import Education from './Education'
import Skills from './Skills'
import Interests from './Interests'
import Projects from './Projects'

const Resume = () => {
    const[skills, setSkills] = useState(false)
    const[projects, setProjects] = useState(true)
    const[interests, setInterests] = useState(false)
    const[active, setActive] = useState('project_focus')
    const[education, setEducation] = useState(null)
    const[skilss, setSkilss] = useState(null)
    const[interest, setInterest] = useState(null)
  return (
    <div className='resume_container' id='resume'>

        <div className='resume_wrapper'>

            <div className='resume_header'>
                <h2>Resume</h2>
                <span>my formal bio details</span>
                <hr></hr>
            </div>

            <div className='resume_details'>

                <div className='details_left'>
                   
                    <ul>

                        <li className={`details_left_li ${active}`}  onClick={() => 
                             { 
                                setActive('project_focus')
                                setSkilss(null)
                                setInterest(null)
                                setSkills(false)
                                setEducation(false)
                                setInterests(false)
                                setProjects(true)
                            }
                            }>
                            <i></i>
                            <span>projects</span>
                        </li>

                        <li className={`details_left_li ${education}`} onClick={
                             () => { 
                                
                                setActive(!active)
                                setSkilss(null)
                                setEducation('project_focus')
                                setInterest(null)
                                setSkills(false)
                                
                                setInterests(false)
                                setProjects(false)
                            }
                            
                            }>
                            <i></i>
                            <span>education</span>
                        </li>

                        <li className={`details_left_li ${skilss}`}  onClick={
                            () => { 
                                setActive(null)
                                setInterest(null)
                                setSkilss('project_focus')
                                setSkills(true)
                                setEducation(false)
                                setInterests(false)
                                setProjects(false)
                            }
                            }>
                            <i></i>
                            <span>skills</span>
                        </li>

                        <li className={`details_left_li ${interest}`}  onClick={() => 
                            {
                            setActive(!active)
                            setSkilss(null)
                            setInterest('project_focus')
                            setSkills(false)
                            setEducation(null)
                            setInterests(true)
                            setProjects(false)}
                            
                            }>
                            <i></i>
                            <span>interests</span>
                        </li>
                       
                    </ul>
                </div>

                <hr></hr>

                <div className='details_right'>

                    {education && <Education/>}
                    {skills && <Skills/>}
                    {projects && <Projects/>}
                    {interests && <Interests/>}
                    

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Resume
