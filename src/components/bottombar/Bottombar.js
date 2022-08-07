
import React,{useState} from 'react'
import './bottombar.css'

const Bottombar = () => {
    const[navOptions, setNavOptions] = useState(false)
  return (
    <div class="nav_container">
        <div class="nav_wrapper" >

            {!navOptions && 
                <div className='initial_display'>

                    <h3>Fay</h3>

                    <div class="nav_open" onClick={() => setNavOptions(true)}>
                        <i class="uil uil-list-ul"></i>
                    </div>

                </div>
            }


            {navOptions && 
                <ul class="nav_list  grid">
                    <li class="nav_item">
                        <a href="#home" class="nav_link" >
                            <i class="uil uil-home"></i> Home
                            
                        </a>
                    </li>

                    <li class="nav_item" >
                        <a href="#about" class="nav_link">
                        <i class="uil uil-user"></i>About
                        </a>
                    </li>

                    <li class="nav_item " >
                        <a href="#resume" class="nav_link">
                        <i class="uil uil-file-question-alt"></i>resume
                        </a>
                    </li>


                    <li class="nav_item " >
                        <a href="#contact" class="nav_link">
                        <i class="uil uil-phone-alt"></i>contact
                        </a>
                    </li>

                    <l1 class="nav_close " onClick={() => setNavOptions(false)}>X</l1>

                </ul>
            }
              

        </div>

        <div className='laptop_view'>

            {/* <div className='laptop_view_wrapper'></div> */}

            <h3>fay</h3>
            

            <ul class="nav_list  grid">

                    <li class="nav_item">
                        <a href="#home" class="nav_link" >
                            Home                            
                        </a>
                    </li>

                    <li class="nav_item" >
                        <a href="#about" class="nav_link">
                        About
                        </a>
                    </li>

                    <li class="nav_item " >
                        <a href="#resume" class="nav_link">
                        resume
                        </a>
                    </li>


                    <li class="nav_item " >
                        <a href="#contact" class="nav_link">
                        contact
                        </a>
                    </li>


            </ul>
            

        </div>
        


    </div>
  )
}

export default Bottombar
