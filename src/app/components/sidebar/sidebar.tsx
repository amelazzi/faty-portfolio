"use client"
import React, { useState } from 'react'
import './sidebar.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'

function Sidebar() {
  const [isActive, setIsActive] = useState('Home')

  return (
    <div className='sidebar-container'>
      <div>
        <h2> Fatiha SAIS </h2>
        <nav>
          <div className={`link-container ${isActive === 'Home' ? 'active' : ''}`} onClick={() => setIsActive('Home')}>
            <div className='icon-container'>
              <HomeRoundedIcon className='icon'/>
            </div>
            <a> Home </a>
          </div>
        </nav>
      </div>
      <div className='footer'>
        <div className='social-media-container'>
          <div className='social-media'></div>
          <div className='social-media'></div>
          <div className='social-media'></div>
          <div className='social-media'></div>
          <div className='social-media'></div>
          <div className='social-media'></div>
        </div>
        <div className='copyright-container'>
          <p> © [Year] Fatiha SAIS. All rights reserved. </p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar