import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import './header.css'
import { Link } from 'react-router-dom'


const Header = () => {
  
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <nav >
      
      <div className='logo_container'>
        <span>Nectar</span>
      </div>

    </nav>
  )
}

export default Header
