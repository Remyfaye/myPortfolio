import React,{useState, useEffect, useContext} from 'react'

import './profile.css'
import SearchIcon from '@mui/icons-material/Search'
// import {Posts} from '../../dummyData'
import Bottombar from '../../components/bottombar/Bottombar'
// import Feed from '../../components/feed/Feed'

// import axios from 'axios'
// import { Link } from 'react-router-dom'
// import {useParams} from 'react-router'
// import { AuthContext } from '../../context/AuthContext'
// const API_BASE = "http://localhost:8800/api/"



const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  // const username = useParams().username
  // const [users, setUsers] = useState({})
  // const {playlistNo, setPlaylistNo} = useState([])
 

  // useEffect(() => {
  //   const fetchUser = async () => {
  //       const res = await axios.get(API_BASE +`users?username=${username}`)
  //       setUsers(res.data)
  //   }
  //   fetchUser()

  //   const getPlaylistsNo = async () => {
  //     const friendList = await axios.get(API_BASE + 'users/playlist/' + users._id)
  //     setPlaylistNo(friendList.data)
  //   }
  //   getPlaylistsNo()
    
  // },[users._id])

  
  return (
    <div className='profile_wrapper'>
        
      
      

          <div className='bottombar'>
              <Bottombar/>
              </div>
    </div>
  )
}

export default Profile
