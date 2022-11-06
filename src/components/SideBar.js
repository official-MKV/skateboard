import React from 'react'
import './Styles/sidebar.css'
import {SideBarData} from '../Data/SideBarData'
import {NavLink} from 'react-router-dom'

function SideBar() {
  const activeLink ='sidebar_Link activeLink';
  const normalLink = 'sidebar_Link normalLink'
  return (
    <div className='sidebar_content'>
      {SideBarData.map((cat)=>{return(
        <div className='sideBarCategory'>
          <p>{cat.name}</p>
          {cat.links.map((link,key)=>{
            return(
              <NavLink key={key} to={link.link} className={({isActive})=>(isActive?'active':'')}>
                <div className='sideBarIcon'>
                {link.icon}
                </div>
                <p>{link.title}</p>
              </NavLink>
            )
          })}
          <div className='line'></div>
        </div>
      )})}
      {/* <p>Menu</p>
        {SideBarData.map((val,key)=>{return(
          <div className='sidebar_item'>
            <NavLink key={key} to={val.link} className={({isActive})=>(isActive?activeLink:normalLink)}>
              {val.icon}
              <p>{val.title}</p>
           </NavLink>
          </div>

          )})} */}
     </div>
  )
}

export default SideBar
