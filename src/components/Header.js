import React from 'react'
import './Styles/header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import profile_image from '../assets/profile_image.png'
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
  return (
    <div className='header_content'>
        <div className='header_logo'>
            skateboard
        </div>
        <div className='header_search'>
            <input placeholder='search'></input>
            <SearchIcon/>
        </div>
        <div className='header_profile'>
            <Avatar alt="Profile Image" src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'  />
            <p>Thomas</p>
            {/* <NotificationsIcon/> */}
        </div>

    </div>
  )
}

export default Header
