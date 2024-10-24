"use client"
import React, { useState } from 'react'
import './sidebar.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch'
import DescriptionIcon from '@mui/icons-material/Description'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import MessageIcon from '@mui/icons-material/Message'

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
            <a href='#home'> Home </a>
          </div>
          <div className={`link-container ${isActive === 'Research topics' ? 'active' : ''}`} onClick={() => setIsActive('Research topics')}>
            <div className='icon-container'>
              <ContentPasteSearchIcon className='icon'/>
            </div>
            <a href='#research-topics'> Research topics </a>
          </div>
          <div className={`link-container ${isActive === 'Publications' ? 'active' : ''}`} onClick={() => setIsActive('Publications')}>
            <div className='icon-container'>
              <DescriptionIcon className='icon'/>
            </div>
            <a href='#publications'> Publications </a>
          </div>
          <div className={`link-container ${isActive === 'Talks' ? 'active' : ''}`} onClick={() => setIsActive('Talks')}>
            <div className='icon-container'>
              <RecordVoiceOverIcon className='icon'/>
            </div>
            <a href='#talks'> Talks </a>
          </div>
          <div className={`link-container ${isActive === 'Get in touch' ? 'active' : ''}`} onClick={() => setIsActive('Get in touch')}>
            <div className='icon-container'>
              <MessageIcon className='icon'/>
            </div>
            <a href='#contact'> Get in touch </a>
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