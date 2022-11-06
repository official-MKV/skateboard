import React from 'react'
import './Styles/usericon.css'
import { Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function UserIcon(props) {
  return (
    <div className='circle'>
        <Avatar alt={props.username} src={props.image_url}/>
        <CheckCircleIcon sx={{color:props.verified?'blue':'white', background:props.color?props.color:'#252836'}}/>
    </div>
  )
}

export default UserIcon
