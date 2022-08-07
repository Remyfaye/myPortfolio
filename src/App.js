import {useState,useEffect} from 'react'
import './App.css';
// import Login from './components/login/Login';

import Home from './components/home/Home';
import Bottombar from './components/bottombar/Bottombar';
import AboutMe from './components/aboutme/AboutMe';

import './App.css'
import Resume from './components/resume/Resume';
import Contact from './components/contactme/Contact';
import Footer from './components/footer/Footer';


function App() {
	
  return (
    <div>
      
        <Home/>
        <div className='about_container'>
        <AboutMe/>
        </div>
        <Resume/>
        <Contact/>
        <Footer/>
        <Bottombar/>
        
          {/* <Route path='/dashboard' element={<DashBoard/>}></Route>
          <Route path='/onboarding' element={<OnBoarding/>}></Route> */}

      </div>
	
			
  )
}

export default App;
